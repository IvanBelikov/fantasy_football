import { useNavigate } from 'react-router'

import { IconButton, ListItem, Typography } from '@mui/material'
import { AddCircleOutline } from '@mui/icons-material'

import { TeamCard } from '@base/entities'
import { AUTH_ROUTES } from '@base/constants'

import { mockTeam } from './mock'
import { ActionsContainer, CustomList, ListContainer } from './TeamsList.styles'

export const TeamsList = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate(AUTH_ROUTES.TEAMS.CREATE.PATH)

  return (
    <ListContainer>
      <ActionsContainer>
        <Typography variant={'h6'}>My teams</Typography>
        <IconButton onClick={handleClick}>
          <AddCircleOutline color={'primary'} />
        </IconButton>
      </ActionsContainer>
      <CustomList>
        <ListItem disablePadding>
          <TeamCard index={1} data={mockTeam} />
        </ListItem>
        <ListItem disablePadding>
          <TeamCard index={2} data={mockTeam} />
        </ListItem>
        <ListItem disablePadding>
          <TeamCard index={3} data={mockTeam} />
        </ListItem>
      </CustomList>
    </ListContainer>
  )
}
