import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://akselskaar.no/contact'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  title: 'Contact me',
  description:
    'Do you have a cool idea? Send me a message and I will get back to you as soon as I can.',
  openGraph: {
    title: 'Contact me | Aksel Skaar',
    description:
      'Do you have a cool idea? Send me a message and I will get back to you as soon as I can.',
    url: 'https://akselskaar.no',
    siteName: 'Aksel Skaar',
    locale: 'no_NO',
    type: 'website',
  },
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <>{children}</>
}
export default Layout
