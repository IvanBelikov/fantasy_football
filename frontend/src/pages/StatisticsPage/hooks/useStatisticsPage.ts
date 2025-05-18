import { useSearchParams } from 'react-router'

import { SearchParamsEnum } from '../types'

export const useStatisticsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const year = searchParams.get(SearchParamsEnum.Year) || ''
  const page = searchParams.get(SearchParamsEnum.Page) || '0'

  return {
    year,
    page,
    setSearchParams,
  }
}
