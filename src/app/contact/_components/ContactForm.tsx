'use client'

import { sendEmail } from './sendemail'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        await sendEmail(formData)
      }}
      className='flex flex-col gap-7'
    >
      <TextInput name='name' placeholder='Fullt navn' />
      <TextInput name='senderEmail' placeholder='Epost' />
      <TextInput name='message' placeholder='Meldingen din..' />
      <Button type='submit'>Send</Button>
    </form>
  )
}
export default ContactForm
