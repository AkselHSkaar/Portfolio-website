import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar, Footer } from '@/components'
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://akselskaar.no'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  title: {
    default: 'Aksel Skaar',
    template: '%s | Aksel Skaar',
  },
  description:
    "Hello, I'm Aksel Skaar. I'm an Oslo based UX/UI designer and web developer, currently working at Aboveit",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    shortcut: '/icon.png',
  },
  applicationName: 'Aksel Skaar',
  keywords: [
    'Aksel Skaar',
    'Aksel',
    'Skaar',
    'Oslo',
    'Aboveit',
    'UX designer fra Oslo',
    'Nettside utvikler fra Oslo',
    'IT konsulent',
    'Webdesigner',
    'UX designer',
    'UI designer',
    'web developer',
    'Utvikler',
    'Webutvikler',
    'technology',
  ],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'Aksel Skaar',
    description:
      "Hello, I'm Aksel Skaar. I'm an Oslo based UX/UI designer and web developer, currently working at Aboveit",
    url: 'https://akselskaar.no',
    siteName: 'Aksel Skaar',
    locale: 'no_NO',
    type: 'website',
    images: [
      {
        url: 'https://akselskaar.blob.core.windows.net/portfolio/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aksel Skaar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'Aksel Skaar',
    title: 'Aksel Skaar',
    description:
      "Hello, I'm Aksel Skaar. I'm an Oslo based UX/UI designer and web developer, currently working at Aboveit",
    creator: 'Aksel Skaar',
    images: [
      {
        url: 'https://akselskaar.blob.core.windows.net/portfolio/images/twitter-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Aksel Skaar',
      },
    ],
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
        `,
          }}
        />
        <PlausibleProvider
          domain='akselskaar.no'
          trackOutboundLinks={true}
          taggedEvents={true}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-xlarge-thin 2xl:text-huge-thin`}
      >
        <Navbar />
        <main className='mt-navbar-sm md:mt-navbar-md lg:mt-navbar-lg'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
