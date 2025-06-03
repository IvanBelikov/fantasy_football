import { useSearchParams } from 'react-router'

import { useSeasonsArray } from '@base/entities'

import { SearchParamsEnum } from '../types'

export const useStatisticsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: seasons, isFetching: isFetchingSeasons } = useSeasonsArray()

  const year = searchParams.get(SearchParamsEnum.Year) || ''

  return {
    year,
    setSearchParams,
    seasons,
    isFetchingSeasons,
  }
}
