import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Users, Pages, Media } from './collections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Pages, Media],
  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),

  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    user: Users.slug,
    // autoLogin: {
    //   email: 'dev@payloadcms.com',
    //   password: 'test',
    //   prefillOnly: true,
    // },
  },

  // async onInit(payload) {
  //   const existingUsers = await payload.find({
  //     collection: 'users',
  //     limit: 1,
  //   })

  //   if (existingUsers.docs.length === 0) {
  //     await payload.create({
  //       collection: 'users',
  //       data: {
  //         email: 'dev@payloadcms.com',
  //         password: 'test',
  //       },
  //     })
  //   }
  // },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})