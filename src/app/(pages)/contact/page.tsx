import Container from '@/components/shared/Container'
import ContactForm from './_components/ContactForm'

const page = () => {
  return (
    <>
      <header className='py-section-xs md:py-section-md lg:pb-0 lg:pt-section-lg xl:pt-section-xl 2xl:pt-section-2xl'>
        <Container>
          <div className='flex flex-col gap-9 md:gap-11 xl:gap-14 2xl:gap-16'>
            <div className='flex flex-col gap-5 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-13'>
              <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
                CONTACT ME
              </h1>
              <p className='text-gray-500 dark:text-gray-200 max-w-[21.375rem] md:max-w-full md:w-2/3 text-small-thin md:text-regular-thin lg:hidden'>
                Do you have a cool idea? Drop me a message and I will get back
                to you.
              </p>
            </div>
          </div>
        </Container>
      </header>
      <section>
        <Container>
          <div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:pt-21 xl:pb-13 gap-7 xl:grid-cols-4'>
            <p className='hidden lg:block lg:col-span-2 text-regular-thin xl:col-span-1 pr-7 2xl:text-large-thin text-gray-500 dark:text-gray-200'>
              Do you have a cool idea? Drop me a message and I will get back to
              you.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
export default page
