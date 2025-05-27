import { z } from 'zod'

export const httpClientEnvSchema = z.object({
  baseURL: z.string(),
})

export type httpClientEnv = z.infer<typeof httpClientEnvSchema>
