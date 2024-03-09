'use server'

import React from 'react'
import { Resend } from 'resend'
import { TContactFormSchema } from '@/schemas/contactFormSchema'
import ContactEmail from '../../email/ContactEmail'
import { revalidatePath } from 'next/cache'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailAction = async (email: TContactFormSchema) => {
  const { name, senderEmail, message } = email

  try {
    await resend.emails.send({
      from: `Ny melding fra ${name} <onboarding@resend.dev>`,
      to: 'akselhskaar@hotmail.no',
      subject: `Ny melding fra kontakt skjema på akselskaar.no`,
      reply_to: senderEmail,
      react: React.createElement(ContactEmail, {
        name: name,
        senderEmail: senderEmail,
        message: message,
      }),
    })
    return {
      message: 'Takk for din henvendelse! Jeg svarer deg så fort jeg kan.',
    }

    revalidatePath('/')
  } catch (e) {
    return {
      message: 'Noe gikk galt. Vennligst prøv igjen senere.',
    }
  }
}
