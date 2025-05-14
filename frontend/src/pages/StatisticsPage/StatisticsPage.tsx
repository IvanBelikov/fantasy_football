import {
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  type SelectChangeEvent,
} from '@mui/material'

import { TeamStatsCardsList, PlayerStatsCardsList } from '@base/widgets'

import { SearchParamsEnum, SelectedValuesEnum } from './types'
import { PageContainer, TabButton, YearSelect } from './StatsticsPage.styles'
import { useStatisticsPage } from './hooks'

export const StatisticsPage = () => {
  const {
    setSearchParams,
    setSelectedTab,
    setSelectedYear,
    selectedTab,
    selectedYear,
  } = useStatisticsPage()

  const handleChange = (event: SelectChangeEvent<string>) =>
    setSelectedYear(event.target.value)

  const handleTabClick = (value: SelectedValuesEnum) => {
    setSelectedTab(value)
    setSearchParams({ [SearchParamsEnum.Selected]: value })
  }

  return (
    <PageContainer>
      <ButtonGroup size={'small'}>
        <TabButton
          onClick={() => handleTabClick(SelectedValuesEnum.Teams)}
          isActive={selectedTab === SelectedValuesEnum.Teams}
        >
          Teams
        </TabButton>
        <TabButton
          onClick={() => handleTabClick(SelectedValuesEnum.Players)}
          isActive={selectedTab === SelectedValuesEnum.Players}
        >
          Players
        </TabButton>
      </ButtonGroup>
      <FormControl>
        <InputLabel id={'year'} size={'small'}>
          Year
        </InputLabel>
        <YearSelect
          labelId={'year'}
          label={'Year'}
          size={'small'}
          value={selectedYear}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'2000'}>2000</MenuItem>
          <MenuItem value={'2001'}>2001</MenuItem>
          <MenuItem value={'2002'}>2002</MenuItem>
        </YearSelect>
      </FormControl>

      {selectedTab === SelectedValuesEnum.Teams ? (
        <TeamStatsCardsList year={selectedYear} />
      ) : (
        <PlayerStatsCardsList year={selectedYear} />
      )}
    </PageContainer>
  )
}
