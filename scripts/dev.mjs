import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import { diagnoseBackendRuntime } from './backend-diagnostics.mjs'
import { findPhpBinary, probeHttpUrl, sleep } from './runtime.mjs'

const rootDir = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(rootDir, '..')
const backendDir = resolve(workspaceRoot, 'backend')
const frontendDir = resolve(workspaceRoot, 'frontend')
const npmExecPath = process.env.npm_execpath
const backendHealthUrl = process.env.BACKEND_HEALTH_URL ?? 'http://127.0.0.1:8000/api/v1/health'
const backendStartupTimeoutMs = Number(process.env.BACKEND_STARTUP_TIMEOUT_MS ?? 60000)
const backendProbeIntervalMs = Number(process.env.BACKEND_PROBE_INTERVAL_MS ?? 1000)

let shuttingDown = false
let backendChild = null
let frontendChild = null
const phpBinary = await findPhpBinary()

if (!npmExecPath) {
  throw new Error('npm_execpath is missing. Run this script through npm.')
}

function stopAll(code = 0) {
  if (shuttingDown) return
  shuttingDown = true

  backendChild?.kill('SIGTERM')
  frontendChild?.kill('SIGTERM')
  setTimeout(() => process.exit(code), 250)
}

async function stopWithDiagnosis(code, reason) {
  if (shuttingDown) return

  process.stderr.write(`${reason}\n`)

  try {
    const report = await diagnoseBackendRuntime({
      healthUrl: backendHealthUrl,
      timeoutMs: 5000,
    })

    process.stdout.write('Backend diagnosis during dev startup:\n')
    process.stdout.write(`- health url: ${report.healthUrl}\n`)
    process.stdout.write(`- legacy health url: ${report.legacyHealthUrl}\n`)
    process.stdout.write(`- classification: ${report.classification.kind}\n`)
    process.stdout.write(`- summary: ${report.classification.title}\n`)
    process.stdout.write('\nNext steps:\n')
    for (const line of report.classification.details) {
      process.stdout.write(`- ${line}\n`)
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    process.stderr.write(`diagnosis failed: ${message}\n`)
  }

  stopAll(code)
}

function start(name, command, args, cwd) {
  const child = spawn(command, args, {
    cwd,
    shell: false,
    windowsHide: true,
    stdio: 'inherit',
  })

  child.on('error', (error) => {
    process.stderr.write(`${name} error: ${error.message}\n`)
    if (name === 'backend') {
      void stopWithDiagnosis(1, `backend failed to start: ${error.message}`)
      return
    }

    stopAll(1)
  })

  return child
}

process.on('SIGINT', () => stopAll(130))
process.on('SIGTERM', () => stopAll(143))

process.stdout.write('Starting backend and frontend...\n')
backendChild = start('backend', phpBinary, ['artisan', 'serve', '--host=127.0.0.1', '--port=8000'], backendDir)

frontendChild = start(
  'frontend',
  process.execPath,
  [npmExecPath, 'run', 'dev', '--', '--host', '127.0.0.1', '--port', '5173'],
  frontendDir,
)

backendChild.on('exit', (code, signal) => {
  if (shuttingDown) {
    return
  }

  const exitCode = code ?? (signal ? 1 : 0)
  if (exitCode === 0) {
    process.stdout.write('backend exited cleanly\n')
    stopAll(0)
    return
  }

  void stopWithDiagnosis(exitCode, `backend exited with code ${exitCode}`)
})

frontendChild.on('exit', (code, signal) => {
  if (shuttingDown) {
    return
  }

  const exitCode = code ?? (signal ? 1 : 0)
  if (exitCode !== 0) {
    process.stderr.write(`frontend exited with code ${exitCode}\n`)
    stopAll(exitCode)
    return
  }

  process.stdout.write('frontend exited cleanly\n')
  stopAll(0)
})

async function waitForBackendStartup() {
  const deadline = Date.now() + backendStartupTimeoutMs
  let lastProbe = null

  while (!shuttingDown && Date.now() < deadline) {
    lastProbe = await probeHttpUrl(backendHealthUrl, { timeoutMs: Math.min(backendProbeIntervalMs, 3000) })
    if (lastProbe.ok) {
      process.stdout.write(`backend is ready at ${backendHealthUrl}\n`)
      return true
    }

    if (backendChild?.exitCode !== null) {
      return false
    }

    await sleep(backendProbeIntervalMs)
  }

  if (!shuttingDown) {
    const summary = lastProbe?.ok
      ? 'unexpectedly succeeded'
      : lastProbe?.status
        ? `HTTP ${lastProbe.status}`
        : lastProbe?.errorCode
          ? `${lastProbe.errorCode}: ${lastProbe.error}`
          : lastProbe?.error ?? 'no response'

    void stopWithDiagnosis(
      1,
      `backend did not become healthy within ${backendStartupTimeoutMs}ms (${summary})`,
    )
  }

  return false
}

void waitForBackendStartup()
