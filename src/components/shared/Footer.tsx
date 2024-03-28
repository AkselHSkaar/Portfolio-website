'use client'

import Link from 'next/link'
import Container from './Container'
import ArrowButton from '../ArrowButton'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pathname = usePathname()

  return (
    <footer className='pt-19 md:pt-21 lg:pt-23 xl:pt-27 md:pb-5 lg:pb-7 xl:pb-11'>
      <Container>
        <div className='pb-15 md:pb-18 lg:pb-20 flex flex-col gap-7 sm:gap-9 lg:gap-11'>
          <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
            AKSEL SKAAR
          </h1>
          <ArrowButton type='function' onClick={scrollToTop} direction='up'>
            BACK TO TOP
          </ArrowButton>
        </div>
        <div className='py-11 gap-7 border-t border-gray-200 dark:border-gray-300'>
          <div className='grid grid-auto-rows grid-cols-2 justify-between lg:grid-cols-7 lg:gap-7 xl:grid-cols-8'>
            <div className='flex flex-col gap-5 col-span-1 lg:col-span-2'>
              <p className='font-normal'>GENERAL</p>
              <ul className='text-gray-400 dark:text-gray-300 flex flex-col gap-3'>
                <li>
                  <Link
                    href='/'
                    className={`${
                      pathname === '/' && 'text-gray-800 dark:text-gray-50'
                    } flex`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className={`${
                      pathname === '/contact' &&
                      'text-gray-800 dark:text-gray-50'
                    } flex`}
                  >
                    CONTACT ME
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5 col-span-1 justify-self-end lg:col-span-2 lg:justify-self-start'>
              <p className='font-normal'>SOCIAL LINKS</p>
              <ul className='text-gray-400 dark:text-gray-300 flex flex-col gap-3'>
                <li>
                  <Link href='https://github.com/AkselHSkaar' target='_blank'>
                    GITHUB
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://linkedin.com/in/aksel-skaar-46785b174'
                    target='_blank'
                  >
                    LINKEDIN
                  </Link>
                </li>
              </ul>
            </div>
            <p className='mt-11 lg:mt-0 lg:text-right text-gray-500 dark:text-gray-200 lg:self-end lg:col-start-6 lg:col-span-2 xl:col-start-7'>
              © AKSEL SKAAR
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
