'use client'

import Link from 'next/link'
import React from 'react'
import { useFormStatus } from 'react-dom'

type ButtonProps = {
  type?: 'link' | 'submit' | 'function'
  children?: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary' | 'danger'
  isSmall?: boolean
  isFullWidth?: boolean
  iconStart?: JSX.Element
  iconEnd?: JSX.Element
  ref?: React.Ref<any>
  pendingMessage?: string
  className?: string
}

const variants = {
  primary:
    'bg-gray-800 dark:bg-gray-800 border border-gray-800 dark:border-gray-500 hover:bg-gray-700 dark:hover:bg-gray-600 active:bg-gray-800 text-gray-50',
  secondary:
    'bg-gray-100 dark:bg-gray-400 border border-gray-800 hover:bg-gray-200 active:bg-gray-900 text-gray-900 active:text-gray-100',
  danger:
    'bg-gray-100 border border-danger-500  hover:bg-danger-100 active:bg-danger-500 text-danger-500 active:text-gray-100',
}

const sizes = {
  big: 'px-7 py-4',
  small: 'px-6 py-3',
}

const width = {
  full: 'w-full',
  content: 'self-start',
}

//  LinkButton
function LinkButton({
  children,
  style,
  href = '',
  iconStart,
  iconEnd,
  ref,
}: ButtonProps & { style?: string }) {
  return (
    <Link href={href} className={style} ref={ref} type='button'>
      {iconStart &&
        React.cloneElement(iconStart, { className: 'size-7 fill-gray-50' })}
      {children}
      {iconEnd &&
        React.cloneElement(iconEnd, { className: 'size-7 fill-gray-50' })}
    </Link>
  )
}

// SubmitButton
function SubmitButton({
  children,
  style,
  iconStart,
  iconEnd,
  ref,
  pendingMessage,
}: ButtonProps & { style?: string }) {
  const { pending } = useFormStatus()
  return (
    <button className={style} type='submit' ref={ref}>
      {pending ? (
        `${pendingMessage}`
      ) : (
        <>
          {iconStart &&
            React.cloneElement(iconStart, { className: 'size-7 fill-gray-50' })}
          {children}
          {iconEnd &&
            React.cloneElement(iconEnd, { className: 'size-7 fill-gray-50' })}
        </>
      )}
    </button>
  )
}

//  FunctionButton
function FunctionButton({
  children,
  onClick,
  style,
  iconStart,
  iconEnd,
  ref,
}: ButtonProps & { style?: string }) {
  return (
    <button className={style} onClick={onClick} ref={ref} type='button'>
      {iconStart &&
        React.cloneElement(iconStart, { className: 'size-7 fill-gray-50' })}
      {children}
      {iconEnd &&
        React.cloneElement(iconEnd, { className: 'size-7 fill-gray-50' })}
    </button>
  )
}

export default function Button({
  children,
  type = 'link',
  href,
  onClick,
  variant = 'primary',
  isSmall = false,
  isFullWidth,
  iconStart,
  iconEnd,
  ref,
  pendingMessage,
  className,
}: ButtonProps) {
  let buttonStyle = `flex justify-center gap-5 ${
    isSmall ? sizes.small : sizes.big
  } ${variants[variant]} ${
    isFullWidth ? width.full : width.content
  } ${className}`
  if (type === 'link') {
    return (
      <LinkButton
        href={href}
        style={buttonStyle}
        iconStart={iconStart}
        iconEnd={iconEnd}
        ref={ref}
      >
        <p className='whitespace-nowrap text-xsmall-thin'>{children}</p>
      </LinkButton>
    )
  } else if (type === 'submit') {
    return (
      <SubmitButton
        style={buttonStyle}
        iconStart={iconStart}
        iconEnd={iconEnd}
        ref={ref}
        pendingMessage={pendingMessage}
      >
        <p className='whitespace-nowrap text-xsmall-thin'>{children}</p>
      </SubmitButton>
    )
  } else if (type === 'function') {
    return (
      <FunctionButton
        style={buttonStyle}
        iconStart={iconStart}
        iconEnd={iconEnd}
        onClick={onClick}
        ref={ref}
      >
        <p className='whitespace-nowrap text-xsmall-thin'>{children}</p>
      </FunctionButton>
    )
  }
}
