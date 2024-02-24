type ExternalLinkProps = {
  className?: string
}

export const ExternalLink = ({ className }: ExternalLinkProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12.5793 10.4992L11.1633 10.3548L11.6064 5.29062L2.87415 12.6178L1.96671 11.5364L10.6989 4.20918L5.63477 3.76612L5.7384 2.34661L13.2351 3.00249L12.5793 10.4992Z' />
    </svg>
  )
}
