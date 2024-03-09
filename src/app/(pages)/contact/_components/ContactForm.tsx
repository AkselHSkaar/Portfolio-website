'use client'

import { sendEmailAction } from '@/actions/actions'
import Button from '@/components/Button'
import {
  contactFormSchema,
  TContactFormSchema,
} from '@/schemas/contactFormSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const NewContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  return (
    <form
      action={async () => {
        const result = await trigger()
        if (!result) return

        const email = getValues()
        await sendEmailAction(email)
      }}
    >
      <div className='flex flex-col gap-7'>
        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>Fullt navn test</span>
          <input
            {...register('name')}
            className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
          />
        </label>

        {errors.name && (
          <p className='text-small-thin'>{`${errors.name.message}`}</p>
        )}

        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>E-post</span>
          <input
            {...register('senderEmail')}
            className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
          />
        </label>

        {errors.senderEmail && (
          <p className='text-small-thin'>{`${errors.senderEmail.message}`}</p>
        )}

        <label className='flex flex-col gap-3'>
          <span className='text-small-thin'>Melding</span>
          <textarea
            {...register('message')}
            rows={4}
            className='w-full outline-none p-4 text-small-thin border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
          />
        </label>

        {errors.message && (
          <p className='text-small-thin'>{`${errors.message.message}`}</p>
        )}

        <button type='submit' disabled={isSubmitting} className='self-start'>
          send
        </button>
      </div>
    </form>
  )
}
export default NewContactForm
