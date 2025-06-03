import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@base/constants'

import { getCountries } from '../api'
import { extractCountries } from '../utils'

export const QUERY_PARAMS = {
  queryKey: [QUERY_KEYS.COUNTRIES],
  queryFn: getCountries,
}

export const useCountries = () => useQuery({ ...QUERY_PARAMS })

export const useCountriesArray = () =>
  useQuery({
    ...QUERY_PARAMS,
    select: extractCountries,
  })
