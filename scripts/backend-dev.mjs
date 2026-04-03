import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { spawnPhp } from './runtime.mjs'

const rootDir = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(rootDir, '..')
const backendDir = resolve(workspaceRoot, 'backend')

const child = await spawnPhp(['artisan', 'serve', '--host=127.0.0.1', '--port=8000'], {
  cwd: backendDir,
  stdio: 'inherit',
})

process.on('SIGINT', () => child.kill('SIGINT'))
process.on('SIGTERM', () => child.kill('SIGTERM'))

child.on('exit', (code) => process.exit(code ?? 0))
