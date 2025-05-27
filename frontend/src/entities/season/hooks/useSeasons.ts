import { useQuery } from '@tanstack/react-query'

import type { SeasonType } from '@base/schemas'

import { extractAvaliableSeasons } from '../utils'
import { getSeasons } from '../api'
import { QUERY_KEYS } from '@base/constants'

export const useSeasons = () =>
  useQuery<SeasonType[]>({
    queryKey: [QUERY_KEYS.SEASONS],
    queryFn: getSeasons,
  })

export const useSeasonsArray = () =>
  useQuery<SeasonType[], Error, number[]>({
    queryKey: [QUERY_KEYS.SEASONS],
    queryFn: getSeasons,
    select: extractAvaliableSeasons,
  })
