import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Aksel Skaar',
  description: 'Portfolio for Aksel Skaar',
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
      </head>
      <body
        className={`${inter.variable} font-sans bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-xlarge-thin 2xl:text-huge-thin`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
