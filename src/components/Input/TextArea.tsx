import InputWrapper from './InputWrapper'

type TextAreaProps = {
  name?: string
  required?: boolean
  label?: string
  placeholder?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

const TextArea = ({
  name,
  required,
  label,
  placeholder,
  iconLeft,
  iconRight,
}: TextAreaProps) => {
  return (
    <InputWrapper label={label} iconLeft={iconLeft} iconRight={iconRight}>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className={`w-full outline-none resize-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out ${
          iconLeft && 'pl-[24px]'
        } ${iconRight && 'pr-[24px]'} `}
      />
    </InputWrapper>
  )
}
export default TextArea
