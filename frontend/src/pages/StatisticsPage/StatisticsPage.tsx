import type { FC } from 'react'
import { Link } from 'react-router'
import {
  ButtonGroup,
  CircularProgress,
  FormControl,
  InputAdornment,
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
  const { year, setSearchParams, seasons, isFetchingSeasons } =
    useStatisticsPage()

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSearchParams({
      [SearchParamsEnum.Year]: event.target.value,
    })
  }

  return (
    <PageContainer>
      <ButtonGroup size={'small'}>
        <LinkButton
          component={Link}
          to={AUTH_ROUTES.STATISTICS.TEAMS.PATH}
          isActive={tab === TabValuesEnum.Teams}
        >
          Teams
        </LinkButton>
        <LinkButton
          component={Link}
          to={AUTH_ROUTES.STATISTICS.PLAYERS.PATH}
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
          value={isFetchingSeasons ? '' : year}
          onChange={handleChange}
          startAdornment={
            isFetchingSeasons && (
              <InputAdornment position={'start'}>
                <CircularProgress size={20} />
              </InputAdornment>
            )
          }
        >
          {isFetchingSeasons ? (
            <MenuItem>Loading...</MenuItem>
          ) : (
            seasons?.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))
          )}
        </YearSelect>
      </FormControl>
      {year &&
        (tab === TabValuesEnum.Teams ? (
          <TeamStatsCardsList year={year} />
        ) : (
          <PlayerStatsCardsList year={year} />
        ))}
    </PageContainer>
  )
}
