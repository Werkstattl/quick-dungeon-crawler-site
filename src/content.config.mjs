// 1. Import utilities from `astro:content`
import { defineCollection, reference } from 'astro:content'
import { z } from 'astro/zod'

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
const wiki = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string(),
    description: z.string(),
    category: z.enum(['start-here', 'gear-upgrades', 'stats-mechanics']),
    order: z.number().int().nonnegative(),
    question: z.string(),
    answer: z.string(),
    faqId: z.string().regex(/^[a-z0-9-]+$/),
    reviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    gameVersion: z.string(),
    sourceRef: z.string().regex(/^[a-f0-9]{40}$/),
    sources: z.array(z.string()).min(1),
    related: z.array(reference('wiki')).default([]),
  }),
})

export const collections = { blog, wiki }
