import Container from '@/components/shared/Container'
import PageHeader from '@/components/PageHeader'
import ContactForm from './_components/ContactForm'

const page = () => {
  return (
    <Container>
      <PageHeader title='CONTACT ME' />
      <main>
        <ContactForm />
      </main>
    </Container>
  )
}
export default page
