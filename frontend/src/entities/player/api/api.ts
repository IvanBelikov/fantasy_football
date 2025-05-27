import { httpClient } from '@base/lib'
import { ENDPOINTS, PLAYERS_FETCH_LIMIT } from '@base/constants'

import { GetPlayersByYearSchema } from './api.schema'

export const getPlayersByYear = async (
  year: string | number,
  page: string | number,
) => {
  try {
    const response = await httpClient.get(ENDPOINTS.GET_PLAYERS_BY_YEAR.PATH, {
      params: {
        [ENDPOINTS.GET_PLAYERS_BY_YEAR.PARAMS.Year]: year,
        [ENDPOINTS.GET_PLAYERS_BY_YEAR.PARAMS.Page]: page,
        [ENDPOINTS.GET_PLAYERS_BY_YEAR.PARAMS.Limit]: PLAYERS_FETCH_LIMIT,
      },
    })
    return GetPlayersByYearSchema.parse(response.data)
  } catch (e) {
    console.error(e)

    return Promise.reject()
  }
}
