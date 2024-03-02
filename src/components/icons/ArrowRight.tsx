type ArrowRightProps = {
  className: string
}

const ArrowRight = ({ className }: ArrowRightProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9.79635 13.6418L8.80452 12.621L12.3991 9.02643H1V7.61472H12.3991L8.80452 4.02013L9.79635 2.99933L15.1176 8.32058L9.79635 13.6418Z' />
    </svg>
  )
}
export default ArrowRight
