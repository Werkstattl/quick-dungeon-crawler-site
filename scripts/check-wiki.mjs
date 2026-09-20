import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { parse } from 'parse5'

const root = resolve('dist')
assert.ok(existsSync(join(root, 'wiki/index.html')), 'Run npm run build first')
const documents = new Map()
const attr = (node, name) => node.attrs?.find((attribute) => attribute.name === name)?.value
const text = (node) => (node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join(''))
const normalise = (value) => value.replace(/\s+/g, ' ').trim()
const walk = function* (node) {
  yield node
  for (const child of node.childNodes ?? []) yield* walk(child)
}
const documentFor = (path) => {
  if (!documents.has(path)) {
    assert.ok(existsSync(path), `Missing page: ${path}`)
    documents.set(path, [...walk(parse(readFileSync(path, 'utf8')))])
  }
  return documents.get(path)
}
const htmlFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : []
  })
const pages = htmlFiles(join(root, 'wiki'))
let checkedLinks = 0
const indexedPages = []

for (const path of pages) {
  const nodes = documentFor(path)
  const route = '/' + path.slice(root.length + 1).replace(/index\.html$/, '')
  const ids = nodes.flatMap((node) => (attr(node, 'id') !== undefined ? [attr(node, 'id')] : []))
  assert.equal(new Set(ids).size, ids.length, `Duplicate IDs on ${route}`)
  assert.equal(nodes.filter((node) => node.tagName === 'h1').length, 1, `Expected one h1 on ${route}`)
  assert.ok(
    nodes.some(
      (node) =>
        node.tagName === 'link' &&
        attr(node, 'rel') === 'canonical' &&
        attr(node, 'href') === `https://quickdungeoncrawler.com${route}`,
    ),
    `Incorrect canonical on ${route}`,
  )
  assert.ok(
    nodes.some((node) => node.tagName === 'meta' && attr(node, 'name') === 'description' && attr(node, 'content')),
    `Missing description on ${route}`,
  )
  const indexed = nodes.filter((node) => attr(node, 'data-pagefind-body') !== undefined)
  if (indexed.length) {
    assert.equal(indexed.length, 1, `Multiple index roots on ${route}`)
    indexedPages.push(route)
    assert.ok(ids.includes('quick-answer'), `Missing quick answer on ${route}`)
    assert.ok(
      nodes.some((node) => attr(node, 'datetime')),
      `Missing review date on ${route}`,
    )
    assert.ok(
      nodes.some((node) =>
        /^https:\/\/github\.com\/Werkstattl\/quick-dungeon-crawler-rpg-od\/blob\/[a-f0-9]{40}\//.test(
          attr(node, 'href') ?? '',
        ),
      ),
      `Missing pinned game source on ${route}`,
    )
  }
  for (const node of nodes.filter((node) => node.tagName === 'a' && attr(node, 'href'))) {
    const url = new URL(attr(node, 'href'), `https://quickdungeoncrawler.com${route}`)
    if (url.origin !== 'https://quickdungeoncrawler.com') continue
    const target = resolve(root, '.' + decodeURIComponent(url.pathname))
    assert.ok(target === root || target.startsWith(root + '/'), `Link escapes build directory: ${url}`)
    const targetPath = url.pathname.endsWith('.html') ? target : join(target, 'index.html')
    if (/\.[a-z0-9]+$/i.test(url.pathname) && !url.pathname.endsWith('.html')) {
      assert.ok(existsSync(target), `Missing asset: ${url}`)
      continue
    }
    const targetNodes = documentFor(targetPath)
    if (url.hash)
      assert.ok(
        targetNodes.some((targetNode) => attr(targetNode, 'id') === decodeURIComponent(url.hash.slice(1))),
        `Broken anchor from ${route}: ${url}`,
      )
    ++checkedLinks
  }
}

const home = documentFor(join(root, 'wiki/index.html'))
const faq = documentFor(join(root, 'wiki/faq/index.html'))
const questions = home.filter((node) => node.tagName === 'details')
assert.ok(questions.length >= 6, 'Expected at least six community questions')
for (const question of questions) {
  const id = attr(question, 'id')
  const answerOnFaq = faq.find((node) => node.tagName === 'details' && attr(node, 'id') === id)
  assert.ok(answerOnFaq, `FAQ page is missing ${id}`)
  assert.equal(normalise(text(question)), normalise(text(answerOnFaq)), `FAQ answer differs for ${id}`)
  const answer = [...walk(question)].find((node) => node.tagName === 'p')
  const guideLink = [...walk(question)].find(
    (node) => node.tagName === 'a' && attr(node, 'href')?.includes('#quick-answer'),
  )
  assert.ok(guideLink, `Missing full guide link for ${id}`)
  const guide = documentFor(
    join(root, new URL(attr(guideLink, 'href'), 'https://quickdungeoncrawler.com').pathname, 'index.html'),
  )
  const panel = guide.find((node) => attr(node, 'class')?.includes('wiki-quick-answer'))
  assert.ok(normalise(text(panel)).includes(normalise(text(answer))), `Guide answer differs for ${id}`)
}
assert.ok(indexedPages.length >= 6, 'Expected six searchable guides')
assert.ok(existsSync(join(root, 'pagefind/pagefind.js')), 'Missing search runtime')
const indexEntry = JSON.parse(readFileSync(join(root, 'pagefind/pagefind-entry.json'), 'utf8'))
assert.equal(
  indexEntry.languages.en.page_count,
  indexedPages.length,
  'Search index must contain every guide and exclude non-guide pages',
)
console.log(
  `Wiki checks passed: ${pages.length} pages, ${checkedLinks} internal links, ${questions.length} shared FAQs, ${indexedPages.length} searchable guides.`,
)
