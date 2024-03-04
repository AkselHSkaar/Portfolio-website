import { cloneElement } from 'react'

type InputWrapperProps = {
  children?: React.ReactNode
  label?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

const InputWrapper = ({
  children,
  label,
  iconLeft,
  iconRight,
}: InputWrapperProps) => {
  return (
    <label className='w-full relative space-y-3'>
      {label && <span className='text-small-thin'>{label}</span>}
      {iconLeft && (
        <span className='absolute left-4 top-4'>
          {cloneElement(iconLeft, { className: 'size-[20px]' })}
        </span>
      )}
      {children}
      {iconRight && (
        <span className='absolute right-4 top-4'>
          {cloneElement(iconRight, { className: 'size-[20px]' })}
        </span>
      )}
    </label>
  )
}
export default InputWrapper
