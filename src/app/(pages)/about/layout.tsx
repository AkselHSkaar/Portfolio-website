import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aksel Skaar | About me',
  description: 'Portfolio for Aksel Skaar',
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <>{children}</>
}
export default Layout
