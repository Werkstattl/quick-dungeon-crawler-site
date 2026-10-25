export interface Breadcrumb {
  name: string
  path: string
}

export const publisher = {
  '@type': 'Organization',
  name: 'Werkstattl',
  url: 'https://werkstattl.com',
}

export const breadcrumbData = (items: Breadcrumb[], site: URL) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: new URL(item.path, site).href,
  })),
})
