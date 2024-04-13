import { Block, CollectionConfig } from 'payload/types'

export const TwoColumn: Block = {
  slug: 'twoColumn',
  labels: {
    singular: 'Two Column',
    plural: 'Two Columns',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'text',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'direction',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
  ],
}
