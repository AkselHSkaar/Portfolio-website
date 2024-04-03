'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUp } from '@/components'

const style =
  'flex gap-3 pb-2 grow-0 text-xsmall-regular md:text-small-regular lg:text-regular-regular xl:text-medium-regular 2xl:text-xlarge-regular border-b border-gray-800 hover:text-gray-500 hover:border-gray-500 dark:border-gray-50 dark:hover:border-gray-200 dark:hover:text-gray-200 text-gray-800 dark:text-gray-50 transition-all duration-100 ease-in-out'

type ArrowButtonProps = {
  type: 'link' | 'function'
  href?: string
  external?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  direction?: 'right' | 'up'
}

// Link button
const ArrowLinkButton = ({
  href = '',
  external,
  children,
  direction = 'right',
}: ArrowButtonProps & { style?: string }) => {
  return (
    <div className='flex'>
      <Link
        href={href}
        {...(external ? { target: '_blank' } : {})}
        className={style}
      >
        {direction === 'right' ? (
          <ArrowRight className='size-5 lg:size-6 xl:size-7 2xl:size-8' />
        ) : (
          <ArrowUp className='size-5 lg:size-6 xl:size-7 2xl:size-8' />
        )}

        {children}
      </Link>
    </div>
  )
}

// Function button
const ArrowFunctionButton = ({
  onClick,
  children,
  direction = 'right',
}: ArrowButtonProps & { style?: string }) => {
  return (
    <div className='flex'>
      <button onClick={onClick} className={style}>
        {direction === 'right' ? (
          <ArrowRight className='size-5 lg:size-6 xl:size-7 2xl:size-8' />
        ) : (
          <ArrowUp className='size-5 lg:size-6 xl:size-7 2xl:size-8' />
        )}

        {children}
      </button>
    </div>
  )
}

const ArrowButton = (props: ArrowButtonProps) => {
  return props.type === 'link' ? (
    <ArrowLinkButton {...props} />
  ) : (
    <ArrowFunctionButton {...props} />
  )
}

export default ArrowButton
