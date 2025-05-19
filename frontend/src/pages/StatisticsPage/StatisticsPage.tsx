import type { FC } from 'react'
import { Link, useNavigate } from 'react-router'
import {
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  type SelectChangeEvent,
} from '@mui/material'

import { TeamStatsCardsList, PlayerStatsCardsList } from '@base/widgets'
import { AUTH_ROUTES } from '@base/constants'

import { SearchParamsEnum, TabValuesEnum } from './types'
import { useStatisticsPage } from './hooks'

import { PageContainer, LinkButton, YearSelect } from './StatsticsPage.styles'
import type { StatisticsPageProps } from './StatisticsPage.props'

export const StatisticsPage: FC<StatisticsPageProps> = ({ tab }) => {
  const navigate = useNavigate()
  const { year, page, setSearchParams } = useStatisticsPage()

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSearchParams({
      [SearchParamsEnum.Year]: event.target.value,
      [SearchParamsEnum.Page]: page,
    })
  }

  const handleTabClick = (value: TabValuesEnum) => {
    navigate(`${AUTH_ROUTES.STATISTICS.PATH}/${value}`)
  }

  return (
    <PageContainer>
      <ButtonGroup size={'small'}>
        <LinkButton
          component={Link}
          to={AUTH_ROUTES.STATISTICS.TEAMS.PATH}
          onClick={() => handleTabClick(TabValuesEnum.Teams)}
          isActive={tab === TabValuesEnum.Teams}
        >
          Teams
        </LinkButton>
        <LinkButton
          component={Link}
          to={AUTH_ROUTES.STATISTICS.PLAYERS.PATH}
          onClick={() => handleTabClick(TabValuesEnum.Players)}
          isActive={tab === TabValuesEnum.Players}
        >
          Players
        </LinkButton>
      </ButtonGroup>
      <FormControl>
        <InputLabel id={'year'} size={'small'}>
          Year
        </InputLabel>
        <YearSelect
          labelId={'year'}
          label={'Year'}
          size={'small'}
          value={year}
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

      {tab === TabValuesEnum.Teams ? (
        <TeamStatsCardsList year={year} />
      ) : (
        <PlayerStatsCardsList year={year} />
      )}
    </PageContainer>
  )
}
