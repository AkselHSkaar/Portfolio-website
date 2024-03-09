import { z } from 'zod'

const contactEmailSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name is required' }).max(100),
  email: z.string().email(),
  message: z
    .string()
    .trim()
    .min(2, { message: 'Message is required' })
    .max(1000, { message: 'Message is too long. Max 1000 characters.' }),
})
