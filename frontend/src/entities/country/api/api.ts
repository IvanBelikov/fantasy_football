import { z } from 'zod'

import { ENDPOINTS } from '@base/constants'
import { httpClient } from '@base/lib'
import { CountrySchema } from '@base/schemas'

export const getCountries = async () => {
  try {
    const response = await httpClient.get(ENDPOINTS.GET_COUNTRIES)

    return z.array(CountrySchema).parse(response.data)
  } catch (e) {
    console.error(e)

    return Promise.reject()
  }
}
