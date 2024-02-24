import ArrowLink from '@/components/ArrowLink'
import Container from '@/components/shared/Container'
import Image from 'next/image'

const MainHero = () => {
  return (
    <>
      <Container>
        <header className='py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl flex flex-col gap-7 lg:gap-9 xl:gap-13 2xl:gap-15'>
          <div className='flex flex-col gap-4 md:gap-7 lg:gap-9 2xl:gap-11'>
            <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
              HELLO, I&apos;M <br /> AKSEL SKAAR!!
            </h1>
            <p className='text-secondary-light max-w-[21.375rem] md:max-w-full md:w-2/3 lg:w-1/2 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-huge-thin 2xl:text-xhuge-thin'>
              I&apos;m a Oslo based UX/UI designer and web developer, currently
              working at Aboveit.
            </p>
          </div>
          <ArrowLink href='/'>CONTACT ME</ArrowLink>
        </header>
      </Container>
      <div className='relative w-full aspect-video'>
        <Image src='/Banner.webp' alt='image' fill={true} />
      </div>
    </>
  )
}
export default MainHero
