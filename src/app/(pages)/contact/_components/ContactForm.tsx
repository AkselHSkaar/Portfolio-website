'use client'

import { sendEmail } from './sendemail'
import Button from '@/components/Button'
import Input from '@/components/Input'

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        await sendEmail(formData)
      }}
      className='flex flex-col gap-7'
    >
      <Input name='name' type='text' placeholder='Fullt navn' required />
      <Input name='senderEmail' type='email' placeholder='Epost' required />
      <Input
        name='message'
        type='text'
        placeholder='Meldingen din..'
        required
      />
      <Button type='submit'>Send</Button>
    </form>
  )
}
export default ContactForm
