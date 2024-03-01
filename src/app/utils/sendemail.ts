'use server'

import { unstable_noStore as noStore } from 'next/cache'
import { Resend } from 'resend'
noStore()

const resend = new Resend(process.env.NEXTRESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name')
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  // if (!message || typeof message !== 'string') {
  //   return {
  //     error: 'Invalid message',
  //   }
  // }

  //TOODO: Style email med react.email

  resend.emails.send({
    from: 'Kontakt skjema - Akselskaar.no <onboarding@resend.dev>',
    to: 'akselhskaar@hotmail.no',
    subject: `Kontakt skjema fra ${name}`,
    reply_to: senderEmail as string,
    html: `<h1>Ny melding fra kontakt skjema på akselskaar.no</h1>
    <p>Medingen er fra: ${name}, ${senderEmail} </p>
    <p>Melding: ${message}</p>`,
  })
}
