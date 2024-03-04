'use client'

import { sendEmail } from './sendemail'
import Button from '@/components/Button'
import TextInput from '@/components/Input/TextInput'
import TextArea from '@/components/Input/TextArea'
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
      <TextInput
        name='name'
        label='Fullt navn'
        type='text'
        placeholder='Fullt navn'
        required
      />
      <TextInput
        name='senderEmail'
        label='Epost'
        type='email'
        placeholder='Epost'
        required
      />
      <TextArea
        name='message'
        label='Melding'
        placeholder='Meldingen din..'
        required
      />
      {feedback && <span className='text-small-regular'>{feedback}</span>}
      <Button type='submit' pendingMessage='Sender...'>
        Send
      </Button>
    </form>
  )
}
export default ContactForm
