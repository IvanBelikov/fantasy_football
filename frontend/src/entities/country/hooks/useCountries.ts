import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@base/constants'

import { getCountries } from '../api'
import { extractCountries } from '../utils'

export const useCountries = () =>
  useQuery({ queryKey: [QUERY_KEYS.COUNTRIES], queryFn: getCountries })

export const useCountriesArray = () =>
  useQuery({
    queryKey: [QUERY_KEYS.COUNTRIES],
    queryFn: getCountries,
    select: extractCountries,
  })
