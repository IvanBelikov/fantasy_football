import { TeamCard } from '@base/entities'

import { StyledList } from './TeamsList.styles'
import { ListItem } from '@mui/material'

export const TeamsList = () => (
  <StyledList>
    <ListItem disablePadding>
      <TeamCard index={1} />
    </ListItem>
    <ListItem disablePadding>
      <TeamCard index={2} />
    </ListItem>
    <ListItem disablePadding>
      <TeamCard index={3} />
    </ListItem>
  </StyledList>
)
