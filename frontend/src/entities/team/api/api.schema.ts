import { z } from 'zod'

import { TeamWithStatsSchema } from '@base/schemas'

export const GetTeamsByYearSchema = z.object({
  page: z.number(),
  total: z.number(),
  totalPages: z.number(),
  data: z.array(TeamWithStatsSchema),
})

export type GetTeamsByYearSchemaType = z.infer<typeof GetTeamsByYearSchema>
