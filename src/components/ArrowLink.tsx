import Link from 'next/link'
import ArrowRight from './icons/ArrowRight'
import ArrowUp from './icons/ArrowUp'
import { link } from 'fs'

type ArrowLinkProps = {
  href: string
  children?: React.ReactNode
  direction?: 'right' | 'up'
}

const ArrowLink = ({ href, children, direction = 'right' }: ArrowLinkProps) => {
  return (
    <div className='flex'>
      <Link
        href={href}
        className='flex gap-3 pb-2 grow-0 text-xsmall-regular md:text-small-regular lg:text-regular-regular xl:text-medium-regular 2xl:text-xlarge-regular border-b border-gray-800 hover:text-gray-500 hover:border-gray-500 dark:border-gray-50 dark:hover:border-gray-200 dark:hover:text-gray-200'
      >
        {direction === 'right' ? (
          <ArrowRight className='size-5 lg:size-6 xl:size-7 2xl:size-8' />
        ) : (
          <ArrowUp className='size-5 lg:size-6 2xl:size-7' />
        )}

        {children}
      </Link>
    </div>
  )
}
export default ArrowLink
