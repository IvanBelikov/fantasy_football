import { TeamCard } from '@base/entities'

import { StyledList } from './TeamsList.styles'
import { ListItem } from '@mui/material'

import { mockTeam } from './mock'

export const TeamsList = () => (
  <StyledList>
    <ListItem disablePadding>
      <TeamCard index={1} data={mockTeam} />
    </ListItem>
    <ListItem disablePadding>
      <TeamCard index={2} data={mockTeam} />
    </ListItem>
    <ListItem disablePadding>
      <TeamCard index={3} data={mockTeam} />
    </ListItem>
  </StyledList>
)
