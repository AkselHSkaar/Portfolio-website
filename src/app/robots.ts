import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/_next',
        '/api',
        '/proxy',
        '/_error',
        '/404',
        '/500',
      ],
    },
    sitemap: 'https://akselskaar.no/sitemap.xml',
  }
}
