'use client'

import { sendEmailAction } from '@/actions/actions'
import Button from '@/components/Button'
import {
  contactFormSchema,
  TContactFormSchema,
} from '@/schemas/contactFormSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const NewContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const [feedbackMessage, setFeedbackMessage] = useState<string>()

  return (
    <form
      action={async () => {
        const result = await trigger()
        if (!result) return

        const contactSubmission = getValues()
        const feedbackMessage = await sendEmailAction(contactSubmission)

        setFeedbackMessage(feedbackMessage.message)

        if (feedbackMessage.reset) {
          reset()
        }
      }}
      className='lg:col-span-5 xl:col-span-2'
    >
      <div className='flex flex-col gap-7'>
        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>Full name</span>
          <input
            {...register('name')}
            className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
            placeholder='Enter your name'
          />
        </label>

        {errors.name && (
          <p className='text-small-thin'>{`${errors.name.message}`}</p>
        )}

        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>E-mail</span>
          <input
            {...register('senderEmail')}
            className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
            placeholder='Enter your e-mail'
          />
        </label>

        {errors.senderEmail && (
          <p className='text-small-thin'>{`${errors.senderEmail.message}`}</p>
        )}

        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>Your message</span>
          <textarea
            {...register('message')}
            rows={4}
            className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
            placeholder='Your message...'
          />
        </label>

        {errors.message && (
          <p className='text-small-thin'>{`${errors.message.message}`}</p>
        )}

        {feedbackMessage && (
          <p className='text-small-thin'>{feedbackMessage}</p>
        )}

        <Button type='submit' className='self-end'>
          Send
        </Button>
      </div>
    </form>
  )
}
export default NewContactForm
