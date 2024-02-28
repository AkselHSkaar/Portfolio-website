'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/app/utils/sendemail'
import Button from '@/components/Button'

export type FormData = {
  name: string
  email: string
  message: string
}

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    sendEmail(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7'>
      <input
        type='text'
        placeholder='Fullt navn'
        className='bg-primary-light border border-gray-900 p-4 text-small-thin w-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
        {...register('name', { required: true })}
      />
      <input
        type='email'
        placeholder='Epost'
        className='bg-primary-light border border-gray-900 p-4 text-small-thin w-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
        {...register('email', { required: true })}
      />

      <textarea
        rows={4}
        placeholder='Epost'
        className='bg-primary-light border border-gray-900 p-4 text-small-thin w-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
        {...register('message', { required: true })}
      />
      <Button type='submit'>Send</Button>
    </form>
  )
}
export default ContactForm
