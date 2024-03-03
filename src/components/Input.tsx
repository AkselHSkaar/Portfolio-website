type InputProps = {
  name?: string
  type?: 'text' | 'email'
  value?: string
  required?: boolean
  label?: string
  placeholder?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  name,
  type = 'text',
  value,
  required,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='bg-primary-light border border-gray-900 p-4 text-small-thin w-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
      {...(required ? { required } : {})}
    />
  )
}
export default Input
