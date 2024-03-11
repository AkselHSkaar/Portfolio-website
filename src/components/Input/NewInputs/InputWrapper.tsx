'use client'

type InputWrapperProps = {
  label?: string
  children: React.ReactNode
  errorMessage?: string | undefined
}

const InputWrapper = ({ label, children, errorMessage }: InputWrapperProps) => {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>{label}</span>
          {children}
        </label>
        {errorMessage && <p className='text-small-thin'>{`${errorMessage}`}</p>}
      </div>
    </>
  )
}
export default InputWrapper
