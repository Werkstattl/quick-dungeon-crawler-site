// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.string().optional(),
    cover: image(),
    coverAlt: z.string(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { blog }
