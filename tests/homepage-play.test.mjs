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

for (const [route, label] of [['/', 'Buy the Windows edition on itch.io'], ['/de/', 'Windows-Version auf itch.io kaufen']]) {
  const page = route === '/' ? home : parse(readFileSync(new URL('../dist/de/index.html', import.meta.url), 'utf8'))

  test(`${route} shows the encounter after the hero and offers browser play again at the end`, () => {
    const main = [...walk(page)].find(n => n.tagName === 'main')
    const sections = main.childNodes.filter(n => n.tagName)
    const [hero, encounter] = sections
    assert.ok(attr(hero, 'class')?.split(/\s+/).includes('hero'))
    assert.equal(text([...walk(encounter)].find(n => n.tagName === 'h2')), route === '/' ? 'Engage or flee?' : 'Kämpfen oder fliehen?')
    const scene = [...walk(encounter)].find(n => n.tagName === 'img')
    assert.match(attr(scene, 'src'), /wolf-pup-exploration/)
    assert.equal([...walk(main)].filter(n => n.tagName === 'img' && attr(n, 'src') === attr(scene, 'src')).length, 1)

    const closing = sections.at(-1)
    assert.equal(attr(closing, 'id'), 'play')
    const playLinks = [...walk(page)].filter(n => n.tagName === 'a' && attr(n, 'href') === 'https://dungeon.werkstattl.com/')
    assert.equal(playLinks.length, 2)
    assert.ok([...walk(hero)].includes(playLinks[0]))
    assert.ok([...walk(closing)].includes(playLinks[1]))
  })

  test(`${route} links to the paid Windows edition in the download area`, () => {
    const area = [...walk(page)].find(n => attr(n, 'class')?.split(/\s+/).includes('call-to-action'))
    assert.ok(area, 'Download area is present')
    const links = [...walk(area)].filter(n => n.tagName === 'a')
    const windows = links.find(n => attr(n, 'href') === 'https://werkstattl.itch.io/quick-dungeon-crawler-on-demand')
    assert.ok(windows, 'Download area links to the Windows store page')
    assert.equal(text(windows), label)
  })
}
