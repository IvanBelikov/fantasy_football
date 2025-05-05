import type { FC } from 'react'

import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ImageNotSupported } from '@mui/icons-material'

import { StatsTable } from '@base/ui'
import { GRID_SIZE } from '@base/constants'

import {
  cardsHeader,
  duelsHeader,
  gamesHeader,
  goalsHeader,
  passesHeader,
  penaltyHeader,
} from './config'
import {
  AffiliationContainer,
  AffiliationLogo,
  CardContainer,
  Info,
  PlayerDetails,
  PlayerImage,
  PlayerInfo,
  StyledChip,
} from './PlayerStatsCard.styles'

import type { PlayerWithStatsProps } from './PlayerStatsCard.props'

export const PlayerStatsCard: FC<PlayerWithStatsProps> = ({ stats }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const gridSize = isMobile ? GRID_SIZE.FULL : GRID_SIZE.HALF

  return (
    <CardContainer>
      <PlayerInfo>
        <PlayerDetails>
          <PlayerImage src={stats.player.photo} alt={'Player image'} />
          <Info>
            <Typography>{stats.player.name}</Typography>
            <Typography variant={'subtitle2'} color={'info'}>
              Age: {stats.player.age}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              Born: {stats.player.birth}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              Height: {stats.player.height}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              Weight: {stats.player.weight}
            </Typography>
          </Info>
        </PlayerDetails>
        <AffiliationContainer>
          <StyledChip
            size={'small'}
            label={stats.team.name}
            icon={
              <AffiliationLogo src={stats.team.logo || ''} alt={'Team logo'}>
                <ImageNotSupported />
              </AffiliationLogo>
            }
          />
          <StyledChip
            size={'small'}
            label={stats.league.name}
            icon={
              <AffiliationLogo
                src={stats.league.logo || ''}
                alt={'League logo'}
              >
                <ImageNotSupported />
              </AffiliationLogo>
            }
          />
        </AffiliationContainer>
      </PlayerInfo>
      <Grid container spacing={1}>
        <Grid size={gridSize}>
          <StatsTable
            title={'Games'}
            header={gamesHeader}
            body={[
              stats.games.appearances,
              stats.games.position,
              stats.games.rating,
              stats.games.captain ? 'Yes' : 'No',
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Goals'}
            header={goalsHeader}
            body={[
              stats.goals.total,
              stats.goals.conceded,
              stats.goals.assists,
              stats.goals.saves,
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Passes'}
            header={passesHeader}
            body={[stats.passes.total, stats.passes.key]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Cards'}
            header={cardsHeader}
            body={[stats.cards.yellow, stats.cards.yellowred, stats.cards.red]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Penalty'}
            header={penaltyHeader}
            body={[
              stats.penalty.won,
              stats.penalty.committed,
              stats.penalty.scored,
              stats.penalty.missed,
              stats.penalty.saved,
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Duels'}
            header={duelsHeader}
            body={[stats.duels.total, stats.duels.won]}
          />
        </Grid>
      </Grid>
    </CardContainer>
  )
}
