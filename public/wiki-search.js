// Keep the post-build Pagefind import native; it is not part of the Vite bundle.

const indexes = new Map()

class WikiSearch extends HTMLElement {
  timer
  request = 0
  abort

  connectedCallback() {
    this.abort?.abort()
    this.abort = new AbortController()
    const input = this.querySelector('input')
    const button = this.querySelector('button')
    const form = this.querySelector('form')
    input.disabled = false
    button.disabled = false
    input.addEventListener(
      'input',
      () => {
        clearTimeout(this.timer)
        ++this.request
        if (!input.value.trim()) {
          this.clear()
          return
        }
        this.timer = setTimeout(() => this.search(), 200)
      },
      { signal: this.abort.signal },
    )
    form.addEventListener(
      'submit',
      (event) => {
        event.preventDefault()
        clearTimeout(this.timer)
        void this.search()
      },
      { signal: this.abort.signal },
    )
  }

  disconnectedCallback() {
    this.abort?.abort()
    clearTimeout(this.timer)
    ++this.request
  }

  clear() {
    this.querySelector('ol').replaceChildren()
    this.querySelector('ol').hidden = true
    this.querySelector('[role="status"]').textContent = ''
    this.removeAttribute('aria-busy')
  }

  async search() {
    const query = this.querySelector('input').value.trim()
    const request = ++this.request
    this.clear()
    if (!query) return
    const status = this.querySelector('[role="status"]')
    const list = this.querySelector('ol')
    const lang = document.documentElement.lang === 'de' ? 'de' : 'en'
    const de = lang === 'de'
    status.textContent = de ? 'Wiki wird durchsucht …' : 'Searching the guides…'
    this.setAttribute('aria-busy', 'true')
    try {
      // Pagefind is generated after Astro builds the site and loaded on demand.
      const { createInstance } = await import('/pagefind/pagefind.js')
      if (request !== this.request || !this.isConnected) return
      // A Pagefind instance selects its language from <html> when created.
      if (!indexes.has(lang)) indexes.set(lang, createInstance())
      const index = indexes.get(lang)
      const response = await index.search(query)
      const results = await Promise.all(response.results.slice(0, 10).map((result) => result.data()))
      if (request !== this.request || !this.isConnected) return
      for (const result of results) {
        const url = new URL(result.url, window.location.origin)
        if (url.origin !== window.location.origin || !url.pathname.startsWith(de ? '/de/wiki/' : '/wiki/')) continue
        const item = document.createElement('li')
        const link = document.createElement('a')
        link.href = url.href
        link.textContent = result.meta.title || (de ? 'Weiterlesen' : 'Read guide')
        const excerpt = document.createElement('p')
        // Treat excerpts as text; never insert search content as executable HTML.
        excerpt.textContent = new DOMParser().parseFromString(result.excerpt, 'text/html').body.textContent
        item.append(link, excerpt)
        list.append(item)
      }
      list.hidden = list.children.length === 0
      const count = response.results.length
      if (de) {
        status.textContent = count
          ? `${count} ${count === 1 ? 'Seite gefunden' : 'Seiten gefunden'}.`
          : 'Keine Treffer. Versuche einen kürzeren Begriff wie „Gold“ oder „Fluch“.'
      } else {
        status.textContent = count
          ? `${count} ${count === 1 ? 'guide' : 'guides'} found${count > 10 ? ' — showing the first 10' : ''}.`
          : 'No guides found. Try a shorter term such as “curse”, “gold”, “refine” or “luck”, or browse the topics.'
      }
    } catch {
      if (request !== this.request || !this.isConnected) return
      status.textContent = de ? 'Die Suche ist gerade nicht verfügbar. Nutze die Links zum Guide und zu den FAQ.' : 'Search is temporarily unavailable. Please browse the guides or FAQs, or try again.'
    } finally {
      if (request === this.request) this.removeAttribute('aria-busy')
    }
  }
}

if (!customElements.get('wiki-search')) customElements.define('wiki-search', WikiSearch)
