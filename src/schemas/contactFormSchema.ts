import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(100),
  senderEmail: z.string().email('Invalid email'),
  message: z
    .string()
    .trim()
    .min(2, 'Message is required')
    .max(1000, 'Message is too long. Max 1000 characters.'),
})

export type TContactFormSchema = z.infer<typeof contactFormSchema>
