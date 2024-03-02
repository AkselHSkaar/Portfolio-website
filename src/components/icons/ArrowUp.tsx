type ArrowUpProps = {
  className?: string
}

const ArrowUp = ({ className }: ArrowUpProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M13.6425 6.20407L12.6217 7.19591L9.02711 3.60132V15.0004H7.61539L7.61539 3.60132L4.0208 7.19591L3 6.20407L8.32125 0.882826L13.6425 6.20407Z' />
    </svg>
  )
}
export default ArrowUp
