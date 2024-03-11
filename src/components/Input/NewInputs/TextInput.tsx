'use client'

import InputWrapper from './InputWrapper'

type TextInputProps = {
  label?: string
  placeholder?: string
  errorMessage?: string | undefined
}

const TextInput = ({
  label,
  placeholder,
  errorMessage,
  ...props
}: TextInputProps) => {
  return (
    <InputWrapper label={label} errorMessage={errorMessage}>
      <input
        {...props}
        className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}
export default TextInput
