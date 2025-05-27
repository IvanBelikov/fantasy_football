import { z } from 'zod'

export const SeasonSchema = z.object({
  year: z.number(),
  start: z.string().optional(),
  end: z.string().optional(),
  current: z.boolean().optional(),
})

export type SeasonType = z.infer<typeof SeasonSchema>
