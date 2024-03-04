'use client'

import { sendEmail } from './sendemail'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRef, useState } from 'react'

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null)
  const [feedback, setFeedback] = useState<string | undefined>()

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset()
        const { feedback } = await sendEmail(formData)
        setFeedback(feedback)
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
      {feedback && <span className='text-rg-bold'>{feedback}</span>}
      <Button type='submit' pendingMessage='Sender...'>
        Send
      </Button>
    </form>
  )
}
export default ContactForm
