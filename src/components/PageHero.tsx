type PageHeroProps = {
  title: string
  text: string
}

const PageHero = ({ title, text }: PageHeroProps) => {
  return (
    <header className='pt-section-xs md:pt-section-md lg:pt-section-lg xl:pt-section-xl 2xl:pt-section-2xl flex flex-col gap-7 lg:gap-9 xl:gap-13 2xl:gap-15'>
      <div className='flex flex-col gap-4 md:gap-7 lg:gap-9 2xl:gap-11'>
        <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
          {title}
        </h1>
        <p className='text-secondary-light max-w-[21.375rem] md:max-w-full md:w-2/3 lg:w-1/2 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-huge-thin 2xl:text-xhuge-thin'>
          {text}
        </p>
      </div>
    </header>
  )
}
export default PageHero
