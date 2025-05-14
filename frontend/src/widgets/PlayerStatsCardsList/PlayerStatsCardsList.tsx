import { PlayerStatsCard } from '@base/entities'
import { Grid } from '@mui/material'

import { mockPlayer } from './mock'

import type { FC } from 'react'
import type { PlayerStatsCardsListProps } from './PlayerStatsCardsList.props'

export const PlayerStatsCardsList: FC<PlayerStatsCardsListProps> = () => {
  return (
    <Grid container spacing={2}>
      <PlayerStatsCard stats={mockPlayer} />
      <PlayerStatsCard stats={mockPlayer} />
      <PlayerStatsCard stats={mockPlayer} />
    </Grid>
  )
}
