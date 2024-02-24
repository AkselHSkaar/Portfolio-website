import Link from 'next/link'
import ArrowRight from './icons/ArrowRight'
import ArrowUp from './icons/ArrowUp'

type ArrowLinkProps = {
  href: string
  children?: React.ReactNode
  direction?: 'right' | 'up'
}

const ArrowLink = ({ href, children, direction = 'right' }: ArrowLinkProps) => {
  return (
    <div className='flex grow-0 text-xsmall-regular md:text-small-regular lg:text-regular-regular xl:text-medium-regular 2xl:text-xlarge-regular hover:text-gray-400 transition-colors duration-200 ease-in-out'>
      <div className='flex flex-col gap-2'>
        <Link href={href} className='flex gap-3 items-center'>
          {direction === 'right' ? (
            <ArrowRight className='fill-gray-800 size-5 lg:size-6 xl:size-7 2xl:size-8' />
          ) : (
            <ArrowUp className='fill-gray-800 size-5 lg:size-6 xl:size-7 2xl:size-8' />
          )}

          {children}
        </Link>
        <div className='h-[1px] lg:h-1 bg-gray-800'></div>
      </div>
    </div>
  )
}
export default ArrowLink
