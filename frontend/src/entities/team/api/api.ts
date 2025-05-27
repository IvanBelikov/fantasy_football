import { ENDPOINTS, TEAMS_FETCH_LIMIT } from '@base/constants'
import { httpClient } from '@base/lib'

import { GetTeamsByYearSchema } from './api.schema'

export const getTeamsByYear = async (
  year: number | string,
  page: number | string,
) => {
  try {
    const response = await httpClient.get(ENDPOINTS.GET_TEAMS_BY_YEAR.PATH, {
      params: {
        [ENDPOINTS.GET_TEAMS_BY_YEAR.PARAMS.Year]: year,
        [ENDPOINTS.GET_TEAMS_BY_YEAR.PARAMS.Page]: page,
        [ENDPOINTS.GET_TEAMS_BY_YEAR.PARAMS.Limit]: TEAMS_FETCH_LIMIT,
      },
    })

    return GetTeamsByYearSchema.parse(response.data)
  } catch (e) {
    console.error(e)

    return Promise.reject()
  }
}
