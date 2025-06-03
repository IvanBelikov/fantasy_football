import { z } from 'zod'

export const CountrySchema = z.object({
  name: z.string(),
  code: z.string(),
  flag: z.string().url(),
})

export type Country = z.infer<typeof CountrySchema>
