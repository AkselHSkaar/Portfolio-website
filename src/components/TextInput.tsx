type TextInputProps = {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='bg-primary-light border border-gray-900 p-4 text-small-thin w-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
      value={value}
      onChange={onChange}
    />
  )
}
export default TextInput
