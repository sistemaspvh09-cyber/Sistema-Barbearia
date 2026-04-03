import { access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import process from 'node:process'
import { findPhpBinary } from './runtime.mjs'

const root = resolve(process.cwd())
const phpBinary = await findPhpBinary()
const npmExecPath = process.env.npm_execpath

const checks = [
  ['node', ['--version']],
  [phpBinary, ['--version']],
  [phpBinary, ['tools/composer.phar', '--version']],
  ['backend', ['backend']],
  ['frontend', ['frontend']],
  ['backend/.env', ['backend/.env']],
  ['frontend/.env', ['frontend/.env']],
]

function runCheck(label, args) {
  if (label === 'backend' || label === 'frontend' || label.includes('.env')) {
    return access(resolve(root, args[0]), constants.F_OK)
      .then(() => ({ ok: true }))
      .catch(() => ({ ok: false }))
  }

  const result = spawnSync(label, args, {
    cwd: root,
    shell: false,
    encoding: 'utf8',
  })

  return Promise.resolve({
    ok: result.status === 0,
    output: (result.stdout || result.stderr || '').trim(),
  })
}

const outcomes = []
for (const [label, args] of checks) {
  // Keep the output compact and deterministic.
  // eslint-disable-next-line no-await-in-loop
  outcomes.push([label, await runCheck(label, args)])
}

if (npmExecPath) {
  const npmCheck = spawnSync(process.execPath, [npmExecPath, '--version'], {
    cwd: root,
    shell: false,
    encoding: 'utf8',
  })
  outcomes.unshift(['npm', { ok: npmCheck.status === 0, output: (npmCheck.stdout || npmCheck.stderr || '').trim() }])
} else {
  outcomes.unshift(['npm', { ok: false, output: 'npm_execpath is missing' }])
}

for (const [label, outcome] of outcomes) {
  const status = outcome.ok ? 'OK' : 'MISSING'
  process.stdout.write(`${status} ${label}${outcome.output ? ` - ${outcome.output.split('\n')[0]}` : ''}\n`)
}

const failed = outcomes.some(([, outcome]) => !outcome.ok)
process.exit(failed ? 1 : 0)
