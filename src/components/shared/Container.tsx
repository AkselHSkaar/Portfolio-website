type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className='px-5 sm:px-7 lg:px-11'>{children}</div>
}
export default Container
