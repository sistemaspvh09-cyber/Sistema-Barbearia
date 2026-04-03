import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { probeHttpUrl } from './runtime.mjs'

export const DEFAULT_BACKEND_HEALTH_URL =
  process.env.BACKEND_HEALTH_URL ?? 'http://127.0.0.1:8000/api/v1/health'

function buildLegacyHealthUrl(healthUrl) {
  if (process.env.BACKEND_LEGACY_HEALTH_URL) {
    return process.env.BACKEND_LEGACY_HEALTH_URL
  }

  const url = new URL(healthUrl)
  url.pathname = '/up'
  url.search = ''
  url.hash = ''
  return url.toString()
}

function summarizeProbe(probe) {
  if (probe.ok) {
    return `OK (${probe.status})`
  }

  if (probe.status) {
    return `HTTP ${probe.status}${probe.statusText ? ` ${probe.statusText}` : ''}`
  }

  if (probe.errorCode) {
    return `${probe.errorCode}: ${probe.error}`
  }

  return probe.error ?? 'unknown failure'
}

function classify(primary, legacy) {
  if (primary.ok || legacy.ok) {
    return {
      kind: 'online',
      title: 'Backend is reachable',
      details: [
        'The frontend should be able to reach the local backend from this machine.',
        'If the browser still shows offline, check that the frontend is calling the same host and port.',
      ],
    }
  }

  if (primary.errorCode === 'ECONNREFUSED' || legacy.errorCode === 'ECONNREFUSED') {
    return {
      kind: 'connection_refused',
      title: 'Backend is not listening on the expected port',
      details: [
        'The frontend probes `127.0.0.1:8000`, but nothing accepted the connection there.',
        'Start Laravel with `npm run backend:dev` or verify that another process is not using port 8000.',
      ],
    }
  }

  if (
    primary.errorCode === 'ETIMEDOUT' ||
    legacy.errorCode === 'ETIMEDOUT' ||
    primary.errorCode === 'UND_ERR_CONNECT_TIMEOUT' ||
    legacy.errorCode === 'UND_ERR_CONNECT_TIMEOUT' ||
    primary.errorCode === 'UND_ERR_HEADERS_TIMEOUT' ||
    legacy.errorCode === 'UND_ERR_HEADERS_TIMEOUT' ||
    primary.errorCode === 'AbortError' ||
    legacy.errorCode === 'AbortError'
  ) {
    return {
      kind: 'timeout',
      title: 'Backend is too slow to answer',
      details: [
        'The frontend could not get a health response before the timeout expired.',
        'Check whether Laravel is blocked on database startup, migrations, or another slow dependency.',
      ],
    }
  }

  if (primary.errorCode === 'ECONNRESET' || legacy.errorCode === 'ECONNRESET') {
    return {
      kind: 'connection_reset',
      title: 'Backend accepted the socket and then reset it',
      details: [
        'The backend process or an upstream dependency dropped the connection mid-request.',
        'Inspect Laravel logs, PHP runtime errors, and any proxy or TLS configuration in front of the app.',
      ],
    }
  }

  if (primary.errorCode === 'ENOTFOUND' || legacy.errorCode === 'ENOTFOUND') {
    return {
      kind: 'dns',
      title: 'Backend host did not resolve',
      details: [
        'The configured host name could not be resolved from this machine.',
        'Keep the local stack on `127.0.0.1` or update the frontend and this diagnostic script together.',
      ],
    }
  }

  if (primary.errorCode === 'EAI_AGAIN' || legacy.errorCode === 'EAI_AGAIN') {
    return {
      kind: 'dns_temporary',
      title: 'Temporary DNS failure',
      details: [
        'The backend host name could not be resolved in time.',
        'Retry after the machine/network stack settles, or use the loopback address for local development.',
      ],
    }
  }

  if (primary.status === 404 && legacy.status === 404) {
    return {
      kind: 'route_missing',
      title: 'Health routes are missing or the wrong app is running',
      details: [
        'Both `/api/v1/health` and Laravel\'s legacy `/up` endpoint returned 404.',
        'That usually means the backend code is not the expected Laravel app, or routes were not registered correctly.',
      ],
    }
  }

  if (primary.status >= 500 || legacy.status >= 500) {
    return {
      kind: 'server_error',
      title: 'Backend is responding, but failing internally',
      details: [
        'The server accepted the request and returned a 5xx error.',
        'Check the Laravel logs, database connection, migrations, and any startup exceptions.',
      ],
    }
  }

  if (primary.status || legacy.status) {
    return {
      kind: 'unexpected_http',
      title: 'Backend responded, but not with a healthy status',
      details: [
        'The backend is reachable, but the health response is not OK.',
        'Inspect the status code, response body, and Laravel logs for the active failure mode.',
      ],
    }
  }

  return {
    kind: 'unknown',
    title: 'Backend is offline or unreachable',
    details: [
      'The frontend cannot get a healthy response from the local backend.',
      'Use the Laravel logs, port checks, and this diagnostic output together to isolate the fault.',
    ],
  }
}

export async function diagnoseBackendRuntime(options = {}) {
  const healthUrl = options.healthUrl ?? DEFAULT_BACKEND_HEALTH_URL
  const legacyHealthUrl = options.legacyHealthUrl ?? buildLegacyHealthUrl(healthUrl)
  const timeoutMs = options.timeoutMs ?? 5000

  const primary = await probeHttpUrl(healthUrl, { timeoutMs })
  const legacy = await probeHttpUrl(legacyHealthUrl, { timeoutMs })
  const classification = classify(primary, legacy)

  return {
    classification,
    healthUrl,
    legacyHealthUrl,
    primary,
    legacy,
  }
}

function printReport(report) {
  process.stdout.write('Backend runtime diagnosis\n')
  process.stdout.write(`- health url: ${report.healthUrl}\n`)
  process.stdout.write(`- legacy health url: ${report.legacyHealthUrl}\n`)
  process.stdout.write(`- primary probe: ${summarizeProbe(report.primary)}\n`)
  process.stdout.write(`- legacy probe: ${summarizeProbe(report.legacy)}\n`)
  process.stdout.write(`- classification: ${report.classification.kind}\n`)
  process.stdout.write(`- summary: ${report.classification.title}\n`)
  process.stdout.write('\nNext steps:\n')

  for (const line of report.classification.details) {
    process.stdout.write(`- ${line}\n`)
  }
}

async function main() {
  const report = await diagnoseBackendRuntime()
  printReport(report)
  process.exitCode = report.classification.kind === 'online' ? 0 : 1
}

const isMainModule = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isMainModule) {
  await main()
}
