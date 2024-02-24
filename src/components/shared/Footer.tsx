import Link from 'next/link'
import Container from './Container'
import ArrowLink from '../ArrowLink'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='py-11 flex flex-col gap-7 sm:gap-9 lg:gap-11'>
          <h1 className='text-h6 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 2xl:text-h1'>
            AKSEL SKAAR
          </h1>
          <ArrowLink href='/' direction='up'>
            BACK TO TOP
          </ArrowLink>
        </div>
        <div className='py-11 flex flex-col gap-7 border-t border-gray-200 dark:border-gray-300'>
          <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col gap-5'>
              <p>GENERAL</p>
              <Link
                href='/'
                className='text-secondary-light dark:text-secondary-dark'
              >
                CONTACT ME
              </Link>
            </div>
            <div className='flex flex-col gap-5'>
              <p>SOCIAL LINKS</p>
              <ul className='text-secondary-light dark:text-secondary-dark flex flex-col gap-3'>
                <li>
                  <Link href='/'>GITHUB</Link>
                </li>
                <li>
                  <Link href='/'>FIGMA</Link>
                </li>
                <li>
                  <Link href='/'>LINKEDIN</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className='text-secondary-light dark:text-secondary-dark'>
            © AKSEL SKAAR
          </p>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
