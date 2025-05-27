import { z } from 'zod'

import { ENDPOINTS } from '@base/constants'
import { httpClient } from '@base/lib'
import { SeasonSchema, type SeasonType } from '@base/schemas'

export const getSeasons = async () => {
  try {
    const response = await httpClient.get<SeasonType[]>(ENDPOINTS.GET_SEASONS)

    return z.array(SeasonSchema).parse(response.data)
  } catch (e) {
    console.error(e)

    return Promise.reject()
  }
}
