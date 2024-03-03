import Container from './shared/Container'

type PageHeaderProps = {
  title: string
  text?: string
}

const PageHeader = ({ title, text }: PageHeaderProps) => {
  return (
    <header className='py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl'>
      <Container>
        <div className='flex flex-col gap-9 md:gap-11 xl:gap-14 2xl:gap-16'>
          <div className='flex flex-col gap-5 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-13'>
            <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
              {title}
            </h1>
            <p className='text-gray-500 dark:text-gray-200 max-w-[21.375rem] md:max-w-full md:w-2/3 lg:w-1/2 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-huge-thin 2xl:text-xhuge-thin'>
              {text}
            </p>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default PageHeader
