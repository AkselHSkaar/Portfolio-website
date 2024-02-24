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
    <html
      lang='en'
      className='bg-primary-light dark:bg-primary-dark text-primary-light dark:text-primary-dark'
    >
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
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main className='mt-navbar-sm md:mt-navbar-md lg:mt-navbar-lg'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
