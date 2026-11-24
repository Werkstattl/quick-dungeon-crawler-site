import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { parse } from 'parse5'

// Run against the production HTML after npm run build, not component source.
const home = parse(readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8'))
function* walk(node) {
  yield node
  for (const child of node.childNodes ?? []) yield* walk(child)
}
const attr = (node, key) => node.attrs?.find(({ name }) => name === key)?.value
const text = (node) => [...walk(node)].filter(n => n.nodeName === '#text').map(n => n.value).join('').replace(/\s+/g, ' ').trim()

test('homepage offers direct browser play first without losing its tagline or store links', () => {
  const hero = [...walk(home)].find(n => n.tagName === 'section' && attr(n, 'class')?.split(/\s+/).includes('hero'))
  assert.ok(hero, 'Homepage hero is present')
  const nodes = [...walk(hero)]
  const links = nodes.filter(n => n.tagName === 'a')
  assert.equal(attr(links[0], 'href'), 'https://dungeon.werkstattl.com/', 'First hero link opens the full game')
  assert.equal(text(links[0]), 'Play in your browser')
  assert.equal(text(nodes.find(n => n.tagName === 'h1')), 'Loot, die, repeat.')
  assert.equal(text(nodes.find(n => n.tagName === 'p')), 'Casual · Offline play · No ads · 100% open-source')
  assert.ok(links.some(n => attr(n, 'href')?.startsWith('https://play.google.com/store/')))
  assert.ok(links.some(n => attr(n, 'href')?.startsWith('https://apps.apple.com/')))
})
