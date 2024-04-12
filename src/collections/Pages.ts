import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
      name: 'content',
      type: 'richText',
    },
  ],
}
