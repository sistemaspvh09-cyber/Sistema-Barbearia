import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const npmExecPath = process.env.npm_execpath

if (!npmExecPath) {
  throw new Error('npm_execpath is missing. Run this script through npm.')
}

const rootDir = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(rootDir, '..')
const frontendDir = resolve(workspaceRoot, 'frontend')

const child = spawn(process.execPath, [npmExecPath, 'run', 'dev', '--', '--host', '127.0.0.1', '--port', '5173'], {
  cwd: frontendDir,
  shell: false,
  stdio: 'inherit',
  windowsHide: true,
})

process.on('SIGINT', () => child.kill('SIGINT'))
process.on('SIGTERM', () => child.kill('SIGTERM'))

child.on('exit', (code) => process.exit(code ?? 0))
