import axios from 'axios'
import { httpClientEnvSchema } from './httpClient.schema'

const config = httpClientEnvSchema.parse({
  baseURL: import.meta.env.VITE_API,
})

export const httpClient = axios.create(config)
