'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmailAction } from '@actions/actions'
import { useState } from 'react'
import Button from '@components/Button'
import {
  contactFormSchema,
  TContactFormSchema,
} from '@schemas/contactFormSchema'

const NewContactForm = () => {
  const {
    register,
    formState: { errors },
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
        // Trigger to validate the form
        const result = await trigger()
        if (!result) return

        // Get form values and send to server action
        const contactSubmission = getValues()
        const feedbackMessage = await sendEmailAction(contactSubmission)

        // Set the feedback message from the server
        setFeedbackMessage(feedbackMessage.message)

        // Reset the form if the server response is successful
        if (feedbackMessage.reset) {
          reset()
        }
      }}
      className='lg:col-span-5 xl:col-span-2'
    >
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-3'>
          <label className='flex flex-col gap-3'>
            <span className='text-small-thin text-gray-700 dark:text-gray-100'>
              Full name
            </span>
            <input
              {...register('name')}
              className='w-full outline-none rounded-none p-4 text-small-thin border border-gray-900 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400 placeholder:text-gray-500 transition-all duration-300 ease-in-out'
              placeholder='John Doe'
              autoComplete='name'
            />
          </label>

          {errors.name && (
            <p className='text-small-thin'>{`${errors.name.message}`}</p>
          )}
        </div>

        <div className='flex flex-col gap-7'>
          <label className='flex flex-col gap-3'>
            <span className='text-small-thin text-gray-700 dark:text-gray-100'>
              E-mail
            </span>
            <input
              {...register('senderEmail')}
              className='w-full outline-none p-4 rounded-none text-small-thin border border-gray-900 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400 placeholder:text-gray-500 transition-all duration-300 ease-in-out'
              placeholder='example@email.com'
              autoComplete='email'
            />
          </label>

          {errors.senderEmail && (
            <p className='text-small-thin'>{`${errors.senderEmail.message}`}</p>
          )}
        </div>

        <div className='flex flex-col gap-7'>
          <label className='flex flex-col gap-3'>
            <span className='text-small-thin text-gray-700 dark:text-gray-100'>
              Message
            </span>
            <textarea
              {...register('message')}
              rows={4}
              className='w-full outline-none rounded-none p-4 text-small-thin border border-gray-900 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400 placeholder:text-gray-500 transition-all duration-300 ease-in-out resize-none'
              placeholder='Type your message here..'
            />
          </label>

          {errors.message && (
            <p className='text-small-thin'>{`${errors.message.message}`}</p>
          )}
        </div>

        {feedbackMessage && (
          <p className='text-small-thin'>{feedbackMessage}</p>
        )}

        <Button type='submit' pendingMessage='Sending..' className='self-end'>
          Send
        </Button>
      </div>
    </form>
  )
}
export default NewContactForm
