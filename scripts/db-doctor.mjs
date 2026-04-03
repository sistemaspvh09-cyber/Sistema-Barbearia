import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { Client } from 'pg'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const backendEnvPath = path.join(rootDir, 'backend', '.env')

function parseEnv(text) {
  const result = {}

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) {
      continue
    }

    const equalsIndex = line.indexOf('=')
    if (equalsIndex === -1) {
      continue
    }

    const key = line.slice(0, equalsIndex).trim()
    let value = line.slice(equalsIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    result[key] = value
  }

  return result
}

function redact(value, visible = 4) {
  if (!value) {
    return '(missing)'
  }

  if (value.length <= visible) {
    return '*'.repeat(value.length)
  }

  return `${value.slice(0, 2)}…${value.slice(-2)} (${value.length} chars)`
}

function classifyError(message) {
  const text = message.toLowerCase()

  if (text.includes('password authentication failed')) {
    return 'auth_failed'
  }

  if (text.includes('tenant or user not found')) {
    return 'tenant_or_user_not_found'
  }

  if (text.includes('circuit breaker open')) {
    return 'pooler_circuit_breaker'
  }

  if (text.includes('ssl connection has been closed unexpectedly')) {
    return 'ssl_closed'
  }

  if (text.includes('root certificate file') && text.includes('does not exist')) {
    return 'missing_root_cert'
  }

  if (text.includes('could not translate host name')) {
    return 'dns'
  }

  if (text.includes('server closed the connection unexpectedly')) {
    return 'server_closed'
  }

  return 'unknown'
}

function guidanceFor(classification, config) {
  const host = config.DB_HOST ? `${config.DB_HOST}:${config.DB_PORT}` : '(missing host)'

  switch (classification) {
    case 'auth_failed':
      return [
        'The password does not match the current Supabase database password.',
        'Rotate or re-copy the database password from Supabase and update `backend/.env`.',
        `Target host: ${host}`,
      ]
    case 'tenant_or_user_not_found':
      return [
        'The pooler cannot map the provided database user to the tenant.',
        'Use the exact `postgres.<project_ref>` user from the Supabase connection string.',
        `Target host: ${host}`,
      ]
    case 'pooler_circuit_breaker':
      return [
        'The Supabase pooler is currently rejecting the upstream connection path.',
        'Try the other pooler mode from the dashboard or re-open the connection window and copy the URI again.',
        `Target host: ${host}`,
      ]
    case 'ssl_closed':
      return [
        'TLS negotiation started but the server closed the session before PostgreSQL authentication completed.',
        'Verify the connection mode and, if needed, retry with the dashboard URI exactly as shown.',
        `Target host: ${host}`,
      ]
    case 'missing_root_cert':
      return [
        'The configured root certificate path does not exist on disk.',
        'Download the Supabase server root certificate again or update `DB_SSLROOTCERT`.',
        `Configured certificate: ${config.DB_SSLROOTCERT || '(missing)'}`,
      ]
    case 'dns':
      return [
        'The host name did not resolve from this machine.',
        'Use the exact Supabase pooler host from the dashboard and keep IPv4 enabled if your network needs it.',
        `Target host: ${host}`,
      ]
    case 'server_closed':
      return [
        'The server accepted the socket and then closed it before query execution.',
        'This usually points to pooler mode, certificate, or upstream database availability.',
        `Target host: ${host}`,
      ]
    default:
      return [
        'The failure does not match a known pattern from this environment.',
        'Re-run after confirming the exact dashboard URI and the database password.',
        `Target host: ${host}`,
      ]
  }
}

async function readBackendEnv() {
  const file = await fs.readFile(backendEnvPath, 'utf8')
  return parseEnv(file)
}

async function main() {
  const fileEnv = await readBackendEnv()
  const config = {
    DB_CONNECTION: process.env.DB_CONNECTION || fileEnv.DB_CONNECTION || 'sqlite',
    DB_HOST: process.env.DB_HOST || fileEnv.DB_HOST || '',
    DB_PORT: process.env.DB_PORT || fileEnv.DB_PORT || '',
    DB_DATABASE: process.env.DB_DATABASE || fileEnv.DB_DATABASE || '',
    DB_USERNAME: process.env.DB_USERNAME || fileEnv.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || fileEnv.DB_PASSWORD || '',
    DB_SSLMODE: process.env.DB_SSLMODE || fileEnv.DB_SSLMODE || 'prefer',
    DB_SSLROOTCERT: process.env.DB_SSLROOTCERT || fileEnv.DB_SSLROOTCERT || '',
  }

  console.log('Supabase database diagnostics')
  console.log(`- connection: ${config.DB_CONNECTION}`)
  console.log(`- host: ${config.DB_HOST || '(missing)'}`)
  console.log(`- port: ${config.DB_PORT || '(missing)'}`)
  console.log(`- database: ${config.DB_DATABASE || '(missing)'}`)
  console.log(`- user: ${config.DB_USERNAME ? redact(config.DB_USERNAME, 8) : '(missing)'}`)
  console.log(`- password: ${config.DB_PASSWORD ? '(set)' : '(missing)'}`)
  console.log(`- sslmode: ${config.DB_SSLMODE}`)
  console.log(`- sslrootcert: ${config.DB_SSLROOTCERT || '(missing)'}`)

  if (!config.DB_HOST || !config.DB_DATABASE || !config.DB_USERNAME || !config.DB_PASSWORD) {
    console.log('\nConnection check skipped because required settings are missing.')
    process.exitCode = 1
    return
  }

  let ssl
  if (config.DB_SSLMODE === 'disable') {
    ssl = false
  } else if (config.DB_SSLROOTCERT) {
    try {
      const ca = await fs.readFile(config.DB_SSLROOTCERT, 'utf8')
      ssl = {
        ca,
        rejectUnauthorized: config.DB_SSLMODE === 'verify-full' || config.DB_SSLMODE === 'verify-ca',
      }
    } catch {
      ssl = {
        rejectUnauthorized: config.DB_SSLMODE === 'verify-full' || config.DB_SSLMODE === 'verify-ca',
      }
    }
  } else {
    ssl = true
  }

  const client = new Client({
    host: config.DB_HOST,
    port: Number(config.DB_PORT) || undefined,
    database: config.DB_DATABASE,
    user: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    ssl,
    connectionTimeoutMillis: 15000,
  })

  try {
    await client.connect()
    const result = await client.query(
      'select current_database() as database, current_user as user, version() as version'
    )

    const row = result.rows[0]
    console.log('\nConnection check: OK')
    console.log(`- database: ${row.database}`)
    console.log(`- user: ${redact(row.user, 8)}`)
    console.log(`- server: ${row.version}`)
    process.exitCode = 0
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    const classification = classifyError(message)

    console.log('\nConnection check: FAILED')
    console.log(`- error: ${message}`)
    console.log(`- classification: ${classification}`)
    console.log('\nNext steps:')
    for (const item of guidanceFor(classification, config)) {
      console.log(`- ${item}`)
    }
    process.exitCode = 1
  } finally {
    await client.end().catch(() => {})
  }
}

await main()
