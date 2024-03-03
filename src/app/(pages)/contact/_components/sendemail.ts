'use server'

import { Resend } from 'resend'
import ContactEmail from '@/email/ContactEmail'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name')
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  try {
    await resend.emails.send({
      from: `Ny melding fra ${name} <onboarding@resend.dev>`,
      to: 'akselhskaar@hotmail.no',
      subject: `Ny melding fra kontakt skjema på akselskaar.no`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactEmail, {
        name: name as string,
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    })
  } catch (error: unknown) {
    console.log(error)
  }
}
