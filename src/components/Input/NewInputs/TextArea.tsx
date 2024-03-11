'use client'

import InputWrapper from './InputWrapper'

type TextAreaProps = {
  label?: string
  placeholder?: string
  rows?: number
  errorMessage?: string | undefined
}

const TextArea = ({
  label,
  placeholder,
  rows,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <InputWrapper label={label} errorMessage={errorMessage}>
      <textarea
        {...props}
        rows={rows || 4}
        className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}
export default TextArea
