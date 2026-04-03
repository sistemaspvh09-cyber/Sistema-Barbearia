import { access, readdir } from 'node:fs/promises'
import { constants } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { spawn } from 'node:child_process'

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK)
    return true
  } catch {
    return false
  }
}

export async function findPhpBinary() {
  const candidates = []

  if (process.env.PHP_BINARY) {
    candidates.push(process.env.PHP_BINARY)
  }

  if (process.platform === 'win32') {
    const localAppData = process.env.LOCALAPPDATA
    if (localAppData) {
      const wingetPackages = join(localAppData, 'Microsoft', 'WinGet', 'Packages')

      try {
        const entries = await readdir(wingetPackages, { withFileTypes: true })
        for (const entry of entries) {
          if (entry.isDirectory() && entry.name.startsWith('PHP.PHP.')) {
            candidates.push(join(wingetPackages, entry.name, 'php.exe'))
          }
        }
      } catch {
        // Fall through to PATH lookup.
      }
    }
  }

  candidates.push('php')

  for (const candidate of candidates) {
    if (candidate === 'php') {
      return candidate
    }

    if (await fileExists(candidate)) {
      return candidate
    }
  }

  return 'php'
}

export async function spawnPhp(args, options = {}) {
  const phpBinary = await findPhpBinary()

  return spawn(phpBinary, args, {
    cwd: options.cwd,
    env: options.env,
    shell: false,
    stdio: options.stdio ?? 'pipe',
    windowsHide: true,
  })
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getErrorCode(error) {
  if (!error || typeof error !== 'object') {
    return null
  }

  const cause = error.cause
  if (cause && typeof cause === 'object' && 'code' in cause && typeof cause.code === 'string') {
    return cause.code
  }

  if ('code' in error && typeof error.code === 'string') {
    return error.code
  }

  return null
}

export async function fetchWithTimeout(url, options = {}) {
  const timeoutMs = options.timeoutMs ?? 5000
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timer)
  }
}

export async function probeHttpUrl(url, options = {}) {
  const timeoutMs = options.timeoutMs ?? 5000

  try {
    const response = await fetchWithTimeout(url, {
      headers: {
        Accept: 'application/json',
        ...(options.headers ?? {}),
      },
      method: options.method ?? 'GET',
      timeoutMs,
    })

    const bodyText = await response.text()

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: bodyText,
      url: response.url,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)

    return {
      ok: false,
      error: message,
      errorCode: getErrorCode(error),
    }
  }
}
