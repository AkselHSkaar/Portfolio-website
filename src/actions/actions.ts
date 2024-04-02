'use server'

import React from 'react'
import { Resend } from 'resend'
import {
  contactFormSchema,
  TContactFormSchema,
} from '@schemas/contactFormSchema'
import ContactEmail from '@email/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailAction = async (
  contactSubmission: TContactFormSchema
) => {
  const validatedContactSubmission =
    contactFormSchema.safeParse(contactSubmission)

  if (!validatedContactSubmission.success) {
    return {
      message: 'Invalid submission. Please try again.',
    }
  }

  const { name, senderEmail, message } = validatedContactSubmission.data

  try {
    await resend.emails.send({
      from: `Ny melding fra ${name} <hello@akselskaar.no>`,
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
      message:
        'Thank you for your message. I will get back to you as soon as possible.',
      reset: true,
    }
  } catch (e) {
    return {
      message: 'Something went wrong. Please try again later.',
      reset: false,
    }
  }
}
