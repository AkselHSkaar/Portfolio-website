import React from 'react'
import InputWrapper from './InputWrapper'

type InputProps = {
  name?: string
  type?: 'text' | 'email'
  value?: string
  required?: boolean
  label?: string
  placeholder?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  name,
  type = 'text',
  value,
  required,
  label,
  placeholder,
  onChange,
  iconLeft,
  iconRight,
}: InputProps) => {
  return (
    <InputWrapper label={label} iconLeft={iconLeft} iconRight={iconRight}>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out ${
          iconLeft && 'pl-[24px]'
        } ${iconRight && 'pr-[24px]'} `}
        {...(required ? { required } : {})}
        {...(iconLeft ? { backgrondImage: iconLeft } : {})}
      />
    </InputWrapper>
  )
}
export default Input
