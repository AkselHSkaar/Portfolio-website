import Container from '@/components/shared/Container'
import ArrowButton from '@/components/ArrowButton'
import Image from 'next/image'
import banner from '@public/banner.jpg'

export default function Home() {
  return (
    <>
      <header className='py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl'>
        <Container>
          <div className='flex flex-col gap-9 md:gap-11 xl:gap-14 2xl:gap-16'>
            <div className='flex flex-col gap-5 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-13'>
              <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
                HELLO, I&apos;M <br /> AKSEL SKAAR
              </h1>
              <p className='text-gray-500 dark:text-gray-300 max-w-[21.375rem] md:max-w-full md:w-2/3 lg:w-1/2 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-huge-thin 2xl:text-xhuge-thin'>
                I&apos;m an Oslo based UX/UI designer and web developer,
                currently working at Aboveit.
              </p>
            </div>
            <ArrowButton type='link' href='/contact'>
              CONTACT ME
            </ArrowButton>
          </div>
        </Container>
      </header>
      <Image src={banner} priority alt='' className='w-full aspect-video' />

      {/* About section */}
      <section>
        <Container>
          <div className='py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl flex flex-col gap-7 lg:grid lg:grid-cols-8 lg:gap-7'>
            <h2 className='text-small-regular md:text-regular-regular lg:text-medium-regular xl:text-medium-regular 2xl:text-xlarge-regular col-span-2'>
              (ABOUT ME)
            </h2>
            <div className='col-span-5 flex flex-col gap-5 lg:gap-11 text-gray-500 dark:text-gray-300'>
              <p>
                I have a bachelor&apos;s degree in technology with
                specialization in interactive design from Kristiania University
                College (2022). While studying I also worked as a freelance
                UX/UI designer.
              </p>
              <p className='mb-7 lg:mb-11'>
                When I&apos;m not working on design or tech, I usually play
                guitar or produce music. I also enjoy going fishing in the
                wilderness with good friends.
              </p>
              <ArrowButton
                type='link'
                href='https://open.spotify.com/playlist/2YnEuuOS6ehzCp3XjdSOj3?si=6a6d4d7905dc48a3'
                external
              >
                WHAT IM LISTENING TO
              </ArrowButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
