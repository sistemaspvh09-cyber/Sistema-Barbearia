import { resolve } from 'node:path'
import process from 'node:process'
import { spawnSync } from 'node:child_process'

const root = resolve(process.cwd())
const eslintBin = resolve(root, 'frontend', 'node_modules', 'eslint', 'bin', 'eslint.js')

const targets = [
  resolve(root, 'frontend', 'src', 'app', 'BarbershopApp.tsx'),
  resolve(root, 'frontend', 'src', 'main.tsx'),
  resolve(root, 'frontend', 'src', 'lib', 'backend.ts'),
  resolve(root, 'frontend', 'src', 'utils', 'supabase.ts'),
]

const result = spawnSync(process.execPath, [eslintBin, ...targets, '--max-warnings', '0'], {
  cwd: resolve(root, 'frontend'),
  encoding: 'utf8',
  shell: false,
})

if (result.stdout) {
  process.stdout.write(result.stdout)
}

if (result.stderr) {
  process.stderr.write(result.stderr)
}

process.exit(result.status ?? 1)
