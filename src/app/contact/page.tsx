import Container from '@/components/shared/Container'
import PageHero from '@/components/PageHero'
import ContactForm from './_components/ContactForm'

const page = () => {
  return (
    <Container>
      <PageHero title='CONTACT ME' text='Contact' />
      <main>
        <ContactForm />
      </main>
    </Container>
  )
}
export default page
