import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const Page = async ({ params }: { params: { slug: string } }) => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
  })

  const page = data.docs.filter((page) => page.slug === params.slug)[0]
  console.log(page)

  return (
    <div>
      <h1>{page.slug}</h1>
    </div>
  )
}
export default Page
