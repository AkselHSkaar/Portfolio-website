import { TwoColumn, Hero } from '@/blocks'
import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero, TwoColumn],
    },
  ],
}
