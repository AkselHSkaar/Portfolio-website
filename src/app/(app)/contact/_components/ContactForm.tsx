'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
  Input,
  Textarea,
  Button,
} from '@/components'
import {
  contactFormSchema,
  TContactFormSchema,
} from '@/schemas/contactFormSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormAction } from '@/actions/contactFormAction'
import { useState } from 'react'

const NewContactForm = () => {
  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      senderEmail: '',
      message: '',
    },
  })

  const [feedbackMessage, setFeedbackMessage] = useState<string>()

  return (
    <Form {...form}>
      <form
        action={async () => {
          const result = await contactFormAction(form.getValues())
          setFeedbackMessage(result.message)

          if (result.reset) {
            form.reset()
          }
        }}
        className='lg:col-span-5 xl:col-span-2'
        autoComplete='on'
      >
        <div className='flex flex-col gap-7 text-small-thin'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Navn Etternavn'
                    {...field}
                    autoComplete='name'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='senderEmail'
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder='example@email.com'
                    {...field}
                    autoComplete='email'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Type your message here..'
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {feedbackMessage && (
            <p className='text-small-thin'>{feedbackMessage}</p>
          )}

          <Button type='submit' className='self-end'>
            Send
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default NewContactForm