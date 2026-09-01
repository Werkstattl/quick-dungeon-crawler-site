// Renders press-kit/fact-sheet.html to public/press/*.pdf and repacks the press kit ZIP.
// Run with: npm run press:build
import { execFileSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, copyFileSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceHtml = path.join(root, 'press-kit/fact-sheet.html')
const outDir = path.join(root, 'public/press')
const pdfName = 'quick-dungeon-crawler-fact-sheet.pdf'
const zipName = 'quick-dungeon-crawler-press-kit.zip'
const kitFolder = 'quick-dungeon-crawler-press-kit'

const kitFiles = [
  ['src/assets/img/logo.png', 'logo.png'],
  ['src/assets/img/character-build.webp', 'screenshot-character-build.webp'],
  ['src/assets/img/exploration.webp', 'screenshot-exploration.webp'],
  ['src/assets/img/boss-combat.webp', 'screenshot-boss-combat.webp'],
  ['src/content/blog/the-forge-screenshot.png', 'screenshot-the-forge.png'],
]

const mimeTypes = {
  '.woff2': 'font/woff2',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
}

const chromePaths = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const chrome = chromePaths.find((candidate) => existsSync(candidate))
if (!chrome) {
  throw new Error(`No Chrome binary found. Set CHROME_PATH to one. Tried:\n  ${chromePaths.join('\n  ')}`)
}

/** Inlines local assets as data URIs so Chrome can render the page from a temp dir without CORS issues. */
const inlineAssets = (html, baseDir) =>
  html.replace(/(src="|url\(')(\.\.?\/[^"')]+)/g, (_match, prefix, relativePath) => {
    const filePath = path.resolve(baseDir, relativePath)
    const mime = mimeTypes[path.extname(filePath).toLowerCase()]
    if (!mime) throw new Error(`Unsupported asset type referenced by fact-sheet.html: ${relativePath}`)
    if (!existsSync(filePath)) throw new Error(`Missing asset referenced by fact-sheet.html: ${relativePath}`)
    return `${prefix}data:${mime};base64,${readFileSync(filePath).toString('base64')}`
  })

/** Recent Chrome keeps running after --print-to-pdf, so wait for a finished PDF instead of for exit. */
const waitForCompletePdf = async (filePath, timeoutMs = 90_000) => {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    await sleep(200)
    if (!existsSync(filePath)) continue
    const tail = (await readFile(filePath)).subarray(-1024).toString('latin1')
    if (tail.includes('%%EOF')) return
  }
  throw new Error(`Chrome did not produce ${filePath} within ${timeoutMs}ms`)
}

const renderPdf = async (htmlFile, pdfFile, profileDir) => {
  rmSync(pdfFile, { force: true })
  const child = spawn(
    chrome,
    [
      '--headless',
      '--disable-gpu',
      `--user-data-dir=${profileDir}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-background-networking',
      '--disable-component-update',
      '--disable-sync',
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000',
      `--print-to-pdf=${pdfFile}`,
      pathToFileURL(htmlFile).href,
    ],
    { stdio: 'ignore', detached: true },
  )
  try {
    await waitForCompletePdf(pdfFile)
  } finally {
    try {
      process.kill(-child.pid)
    } catch {
      child.kill()
    }
  }
}

const work = mkdtempSync(path.join(tmpdir(), 'qdc-press-'))

try {
  const bundledHtml = path.join(work, 'fact-sheet.html')
  writeFileSync(bundledHtml, inlineAssets(readFileSync(sourceHtml, 'utf8'), path.dirname(sourceHtml)))

  mkdirSync(outDir, { recursive: true })
  await renderPdf(bundledHtml, path.join(outDir, pdfName), path.join(work, 'profile'))
  console.log(`✓ public/press/${pdfName}`)

  const staged = path.join(work, kitFolder)
  mkdirSync(staged)
  copyFileSync(path.join(outDir, pdfName), path.join(staged, pdfName))
  for (const [from, to] of kitFiles) copyFileSync(path.join(root, from), path.join(staged, to))

  rmSync(path.join(outDir, zipName), { force: true })
  execFileSync('zip', ['-rq', path.join(outDir, zipName), kitFolder], { cwd: work })
  console.log(`✓ public/press/${zipName}`)
} finally {
  rmSync(work, { recursive: true, force: true })
}
