export const pages = {
  home: { en: '/', de: '/de/' },
  firstRun: { en: '/wiki/getting-started/', de: '/de/wiki/einstieg/' },
  faq: { en: '/wiki/faq/', de: '/de/wiki/faq/' },
} as const

export const pageLanguage = (url: URL) => (/^\/de(?:\/|$)/.test(url.pathname) ? 'de' : 'en')

export function translatedPaths(url: URL) {
  const path = url.pathname.replace(/\/?$/, '/')
  return Object.values(pages).find(({ en, de }) => path === en || path === de)
}
