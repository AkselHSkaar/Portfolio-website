import { Container } from '@/components'
import ContactForm from './_components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://akselskaar.no/contact'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  title: 'Contact me',
  description:
    'Do you have a cool idea? Send me a message and I will get back to you as soon as I can.',
  openGraph: {
    title: 'Contact me | Aksel Skaar',
    description:
      'Do you have a cool idea? Send me a message and I will get back to you as soon as I can.',
    url: 'https://akselskaar.no/contact',
    siteName: 'Aksel Skaar',
    locale: 'no_NO',
    type: 'website',
    images: [
      {
        url: 'https://akselskaar.blob.core.windows.net/portfolio/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aksel Skaar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'Aksel Skaar',
    title: 'Contact me | Aksel Skaar',
    description:
      'Do you have a cool idea? Send me a message and I will get back to you as soon as I can.',
    creator: 'Aksel Skaar',
    images: [
      {
        url: 'https://akselskaar.blob.core.windows.net/portfolio/images/twitter-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Aksel Skaar',
      },
    ],
  },
}

const ContactPage = () => {
  return (
    <>
      <header className='py-section-xs md:py-section-md lg:pb-0 lg:pt-section-lg xl:pt-section-xl 2xl:pt-section-2xl'>
        <Container>
          <div className='flex flex-col gap-9 md:gap-11 xl:gap-14 2xl:gap-16'>
            <div className='flex flex-col gap-5 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-13'>
              <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
                CONTACT ME
              </h1>
              <p className='text-gray-500 dark:text-gray-300 max-w-[21.375rem] md:max-w-full md:w-2/3 text-small-thin md:text-regular-thin lg:hidden'>
                Do you have a cool idea? Send me a message and I will get back
                to you as soon as I can.
              </p>
            </div>
          </div>
        </Container>
      </header>
      <section>
        <Container>
          <div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:pt-21 xl:pb-13 gap-7 xl:grid-cols-4'>
            <p className='hidden lg:block lg:col-span-2 text-regular-thin xl:col-span-1 pr-7 2xl:text-large-thin text-gray-500 dark:text-gray-200'>
              Do you have a cool idea? Send me a message and I will get back to
              you as soon as I can.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
export default ContactPage
