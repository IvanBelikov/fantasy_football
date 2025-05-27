import { useInfiniteQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@base/constants'

import { getPlayersByYear } from '../api'

export const usePlayersByYear = (year: number | string) =>
  useInfiniteQuery({
    queryKey: [QUERY_KEYS.PLAYERS_BY_YEAR, year],
    queryFn: ({ pageParam }) => getPlayersByYear(year, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : null,
  })
