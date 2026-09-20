import { getCollection } from 'astro:content'

export const wikiCategories = [
  {
    id: 'start-here',
    title: 'Start Here',
    icon: 'lucide:compass',
    description: 'Your first run, your next challenge, and what stays with you.',
  },
  {
    id: 'gear-upgrades',
    title: 'Gear & Upgrades',
    icon: 'lucide:anvil',
    description: 'Make sense of your loot and put your resources to work.',
  },
  {
    id: 'stats-mechanics',
    title: 'Stats & Mechanics',
    icon: 'lucide:dices',
    description: 'Understand the numbers behind your adventures.',
  },
] as const

export const getWikiArticles = async () => (await getCollection('wiki')).sort((a, b) => a.data.order - b.data.order)

export const wikiUrl = (id: string) => `/wiki/${id}/`
