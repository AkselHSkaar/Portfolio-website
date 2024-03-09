import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

type ContactEmailProps = {
  name: string
  senderEmail: string
  message: string
}

function ContactEmail({ name, senderEmail, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Ny melding fra portfolio nettside</Preview>
      <Tailwind>
        <Body className='bg-gray-50 font-sans text-gray-800'>
          <Container>
            <Heading className='text-h1'>Ny melding fra {name}</Heading>
            <Hr />
            <Section>
              <Text className='text-regular-regular'>
                Medlingen er fra: {name}, {senderEmail}
              </Text>
            </Section>
            <Hr />
            <Text className='text-regular-regular'>På meldingen står det:</Text>
            <Section className='p-5 bg-gray-100 text-medium-thin'>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
export default ContactEmail
