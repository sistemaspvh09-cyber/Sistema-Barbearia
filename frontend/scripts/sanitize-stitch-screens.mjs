import { readdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const screensDir = new URL('../src/screens/', import.meta.url)
const screensDirPath = fileURLToPath(screensDir)

const attributeMap = new Map([
  ['viewbox', 'viewBox'],
  ['stroke-width', 'strokeWidth'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-opacity', 'strokeOpacity'],
  ['stroke-dasharray', 'strokeDasharray'],
  ['stroke-dashoffset', 'strokeDashoffset'],
  ['fill-opacity', 'fillOpacity'],
  ['fill-rule', 'fillRule'],
  ['clip-rule', 'clipRule'],
  ['stop-color', 'stopColor'],
  ['stop-opacity', 'stopOpacity'],
  ['tabindex', 'tabIndex'],
  ['autocomplete', 'autoComplete'],
  ['readonly', 'readOnly'],
  ['srcset', 'srcSet'],
  ['maxlength', 'maxLength'],
])

function sanitizeContents(source) {
  let next = source

  next = next.replace(/<!--([\s\S]*?)-->/g, (_match, comment) => `{/*${comment}*/}`)
  next = next.replace(/\bfor=/g, 'htmlFor=')

  for (const [from, to] of attributeMap) {
    const pattern = new RegExp(`\\b${from}=`, 'g')
    next = next.replace(pattern, `${to}=`)
  }

  next = next.replace(/fontVariationSettings:\s*""'/g, 'fontVariationSettings: "\'')
  next = next.replace(
    /fontVariationSettings:\s*''([\s\S]*?)'(?=\s*}}|,)/g,
    (_match, value) => `fontVariationSettings: "'${value}"`,
  )

  next = next.replace(/\r\n/g, '\n')

  return next
}

async function main() {
  const files = await readdir(screensDir, { withFileTypes: true })
  let changed = 0

  for (const file of files) {
    if (!file.isFile() || !file.name.endsWith('.tsx')) {
      continue
    }

    const filePath = join(screensDirPath, file.name)
    const original = await readFile(filePath, 'utf8')
    const sanitized = sanitizeContents(original)

    if (sanitized !== original) {
      await writeFile(filePath, sanitized, 'utf8')
      changed += 1
    }
  }

  process.stdout.write(`Sanitized ${changed} screen files.\n`)
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`)
  process.exitCode = 1
})
