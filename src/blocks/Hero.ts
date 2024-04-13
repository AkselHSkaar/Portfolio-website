import { Block, CollectionConfig } from 'payload/types'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'text',
    },
    {
      name: 'background',
      label: 'Background',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
