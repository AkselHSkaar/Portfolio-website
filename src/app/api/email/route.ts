import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',

    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    //cc: 'hei@akselskaar.no',
    subject: `Porfolio form mail fra ${name}`,
    text: message,
    html: ` <h1>Ny beskjed fra ${name}, ${email}</h1>
    <h3>Melding: ${message}</3>
    `,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
