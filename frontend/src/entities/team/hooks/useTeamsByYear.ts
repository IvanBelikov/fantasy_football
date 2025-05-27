import { useInfiniteQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@base/constants'

import { getTeamsByYear } from '../api'

export const useTeamsByYear = (year: number | string) =>
  useInfiniteQuery({
    queryKey: [QUERY_KEYS.TEAMS_BY_YEAR, year],
    queryFn: ({ pageParam }) => getTeamsByYear(year, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : null,
  })
