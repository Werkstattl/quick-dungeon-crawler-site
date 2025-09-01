import { getCollection } from 'astro:content'

export async function GET({ site }) {
  const posts = await getCollection('blog')

  posts.sort((a, b) => {
    const aDate = a.data.date ? new Date(a.data.date).getTime() : 0
    const bDate = b.data.date ? new Date(b.data.date).getTime() : 0
    return bDate - aDate
  })

  const channelTitle = 'Quick Dungeon Crawler Blog'
  const channelLink = new URL('/blog', site).toString()
  const channelDescription = 'Official updates and patch notes for Quick Dungeon Crawler.'

  const itemsXml = posts
    .map((post) => {
      const link = new URL(`/blog/${post.id}`, site).toString()
      const pubDate = post.data.date ? new Date(post.data.date).toUTCString() : new Date().toUTCString()

      return `\n    <item>\n      <title><![CDATA[${post.data.title}]]></title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <description><![CDATA[${post.data.description}]]></description>\n      <author><![CDATA[${post.data.author}]]></author>\n      <pubDate>${pubDate}</pubDate>\n    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title><![CDATA[${channelTitle}]]></title>\n    <link>${channelLink}</link>\n    <description><![CDATA[${channelDescription}]]></description>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${itemsXml}\n  </channel>\n</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=600',
    },
  })
}

