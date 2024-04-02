import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aksel Skaar | Contact me',
  description:
    'Do you have a cool idea? Send me a message and I will get back to you as soon as I can.',
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <>{children}</>
}
export default Layout
