import { z } from 'zod'

import { PlayerWithStatsSchema } from '@base/schemas'

export const GetPlayersByYearSchema = z.object({
  page: z.number(),
  total: z.number(),
  totalPages: z.number(),
  data: z.array(PlayerWithStatsSchema),
})

export type GetPlayersByYearSchemaType = z.infer<typeof GetPlayersByYearSchema>
