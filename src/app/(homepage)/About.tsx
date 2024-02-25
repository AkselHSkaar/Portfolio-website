import Container from '@/components/shared/Container'

const About = () => {
  return (
    <Container>
      <section className='py-section-xs md:py-section-md lg:py-section-lg xl:py-section-xl 2xl:py-section-2xl flex flex-col gap-7'>
        <h2 className='text-xsmall-regular  md:text-small-regular lg:text-regular-regular xl:text-medium-regular 2xl:text-xlarge-regular'>
          (ABOUT ME)
        </h2>
        <div className='flex flex-col gap-5 lg:gap-11 text-secondary-light dark:text-secondary-dark text-xsmall-regular md:text-regular-regular lg:text-medium-regular xl:text-xlarge-regular 2xl:text-huge-regular'>
          <p>
            I have a bacehlors degree in technology & interaction design for
            Kristiania University College (2022). While studying i also worked
            as a freelance UX/UI designer.
          </p>
          <p>
            When i`m not working with design or tech, i play guitar and produce
            music, go fishing or hang out with friends.
          </p>
        </div>
        {/* <ArrowLink text='What im listening to' external /> */}
      </section>
    </Container>
  )
}
export default About
