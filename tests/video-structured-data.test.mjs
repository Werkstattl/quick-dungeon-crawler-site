import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { parse } from 'parse5'

function* walk(node) {
  yield node
  for (const child of node.childNodes ?? []) yield* walk(child)
}

for (const route of ['', 'de/']) {
  test(`/${route} publishes the trailer's upload date with its timezone`, () => {
    const html = readFileSync(new URL(`../dist/${route}index.html`, import.meta.url), 'utf8')
    const data = [...walk(parse(html))]
      .filter(node => node.tagName === 'script' && node.attrs.some(a => a.value === 'application/ld+json'))
      .flatMap(node => JSON.parse(node.childNodes[0].value)['@graph'] ?? [])
    assert.equal(data.find(node => node.trailer)?.trailer.uploadDate, '2026-08-01T08:44:47Z')
  })
}
