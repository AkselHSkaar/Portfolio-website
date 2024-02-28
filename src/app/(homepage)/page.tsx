import Container from '@/components/shared/Container'
import ArrowLink from '@/components/ArrowLink'
import Image from 'next/image'
import { ProjectsData } from '@/data/projectsData'
import ProjectsItem from './ProjectsItem'

export default function Home() {
  return (
    <>
      <header className='mt-navbar-sm md:mt-navbar-md lg:mt-navbar-lg py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl'>
        <Container>
          <div className='flex flex-col gap-7 lg:gap-9 xl:gap-13 2xl:gap-15'>
            <div className='flex flex-col gap-4 md:gap-7 lg:gap-9 2xl:gap-11'>
              <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
                HELLO, I&apos;M <br /> AKSEL SKAAR
              </h1>
              <p className='text-secondary-light max-w-[21.375rem] md:max-w-full md:w-2/3 lg:w-1/2 text-small-thin md:text-regular-thin lg:text-large-thin xl:text-huge-thin 2xl:text-xhuge-thin'>
                I&apos;m a Oslo based UX/UI designer and web developer,
                currently working at Aboveit.
              </p>
            </div>
            <ArrowLink href='/'>CONTACT ME</ArrowLink>
          </div>
        </Container>
      </header>
      <div className='relative w-full aspect-video'>
        <Image src='/Banner.webp' alt='image' fill={true} />
      </div>

      {/* About section */}
      <section>
        <Container>
          <div className='py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl flex flex-col gap-7'>
            <h2 className='text-xsmall-regular  md:text-small-regular lg:text-regular-regular xl:text-medium-regular 2xl:text-xlarge-regular'>
              (ABOUT ME)
            </h2>
            <div className='flex flex-col gap-5 lg:gap-11 text-secondary-light dark:text-secondary-dark text-xsmall-regular md:text-regular-regular lg:text-medium-regular xl:text-xlarge-regular 2xl:text-huge-regular'>
              <p>
                I have a bacehlors degree in technology & interaction design for
                Kristiania University College (2022). While studying i also
                worked as a freelance UX/UI designer.
              </p>
              <p>
                When i`m not working with design or tech, i play guitar and
                produce music, go fishing or hang out with friends.
              </p>
            </div>
            <ArrowLink href='/'>WHAT IM LISTENING TO</ArrowLink>
          </div>
        </Container>
      </section>

      {/* Projects section */}
      <section>
        <Container>
          <div className='flex flex-col gap-15 lg:gap-20 xl:gap-23 2xl:gap-26'>
            {ProjectsData.map((project) => (
              <ProjectsItem key={project.id} data={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
