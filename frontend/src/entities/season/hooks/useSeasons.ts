import { useQuery } from '@tanstack/react-query'

import type { SeasonType } from '@base/schemas'

import { extractAvaliableSeasons } from '../utils'
import { getSeasons } from '../api'
import { QUERY_KEYS } from '@base/constants'

export const QUERY_PARAMS = {
  queryKey: [QUERY_KEYS.SEASONS],
  queryFn: getSeasons,
}

export const useSeasons = () =>
  useQuery<SeasonType[]>({
    ...QUERY_PARAMS,
  })

export const useSeasonsArray = () =>
  useQuery<SeasonType[], Error, number[]>({
    ...QUERY_PARAMS,
    select: extractAvaliableSeasons,
  })
