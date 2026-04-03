import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { spawnPhp } from './runtime.mjs'

const rootDir = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(rootDir, '..')
const backendDir = resolve(workspaceRoot, 'backend')

const child = await spawnPhp(['artisan', 'test'], {
  cwd: backendDir,
  stdio: 'inherit',
})

child.on('exit', (code) => process.exit(code ?? 0))
