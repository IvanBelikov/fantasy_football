import type { FC } from 'react'

import { Avatar, Chip, Divider, Typography } from '@mui/material'

import { StatsTable } from '@base/ui'

import { tableHeaders } from '../config'

import {
  CardContainer,
  HeaderContainer,
  TeamInfoContainer,
  TeamLogo,
  TeamInfo,
  LeagueLogo,
  StadiumContainer,
  StadiumLogo,
  StadiumInfo,
} from './TeamStatsCard.styles'

import type { TeamStatsCardProps } from './TeamStatsCard.props'

export const TeamStatsCard: FC<TeamStatsCardProps> = ({ stats }) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <TeamInfoContainer>
          <TeamLogo src={stats.team.logo} alt={'Team logo'} />
          <TeamInfo>
            <Typography>{stats.team.name}</Typography>
            <Typography color={'textSecondary'} variant={'subtitle2'}>
              Founded: {stats.team.founded}
            </Typography>
          </TeamInfo>
        </TeamInfoContainer>
        <Chip
          size={'small'}
          label={'UEFA Champions League'}
          icon={<LeagueLogo src={stats.league.logo} alt={'League logo'} />}
        />
      </HeaderContainer>
      <Divider />
      <StadiumContainer>
        {stats.venue.image ? (
          <StadiumLogo
            variant={'rounded'}
            src={stats.venue.image}
            alt={'Stadium logo'}
          />
        ) : (
          <Avatar>T</Avatar>
        )}
        <StadiumInfo>
          <Typography>{stats.venue.name}</Typography>
          <Typography color={'textSecondary'} variant={'subtitle2'}>
            {`${stats.venue.address}, ${stats.league.country.name}`}
          </Typography>
          <Typography color={'info'} variant={'subtitle2'}>
            Capacity: {stats.venue.capacity}
          </Typography>
        </StadiumInfo>
      </StadiumContainer>
      <StatsTable
        header={tableHeaders}
        body={[
          stats.stats.played,
          stats.stats.wins,
          stats.stats.draws,
          stats.stats.loses,
          stats.stats.goals,
        ]}
      />
    </CardContainer>
  )
}
