import { useState } from 'react'
import { useSearchParams } from 'react-router'

import type { Nullable } from '@base/types'

import { SearchParamsEnum, SelectedValuesEnum } from '../types'

export const useStatisticsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let selectedParam = searchParams.get(
    SearchParamsEnum.Selected,
  ) as Nullable<SelectedValuesEnum>

  if (
    selectedParam &&
    !Object.values(SelectedValuesEnum).includes(selectedParam)
  ) {
    selectedParam = SelectedValuesEnum.Teams
  }

  const [selectedYear, setSelectedYear] = useState('')
  const [selectedTab, setSelectedTab] = useState<SelectedValuesEnum>(
    selectedParam || SelectedValuesEnum.Teams,
  )

  return {
    setSearchParams,
    selectedYear,
    setSelectedYear,
    selectedTab,
    setSelectedTab,
  }
}
