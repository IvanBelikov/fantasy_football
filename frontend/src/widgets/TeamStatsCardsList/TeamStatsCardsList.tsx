import type { FC } from 'react'

import { TeamStatsCard } from '@base/entities'

import { mockTeam } from './mock'

import { CustomGrid } from './TeamStatsCardsList.styles'
import type { TeamStatsCardsListProps } from './TeamStatsCardsList.props'

export const TeamStatsCardsList: FC<TeamStatsCardsListProps> = () => {
  return (
    <CustomGrid container spacing={2}>
      <TeamStatsCard stats={mockTeam} />
      <TeamStatsCard stats={mockTeam} />
      <TeamStatsCard stats={mockTeam} />
      <TeamStatsCard stats={mockTeam} />
    </CustomGrid>
  )
}
