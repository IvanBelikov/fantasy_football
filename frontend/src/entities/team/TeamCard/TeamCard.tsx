import type { FC } from 'react'
import { useNavigate } from 'react-router'

import { Button, Chip, Typography } from '@mui/material'

import { AUTH_ROUTES } from '@base/constants'

import {
  ActionsContainer,
  CardContainer,
  FlagLogo,
  InfoContainer,
  TextContainer,
  TitleContainer,
  IndexTypography,
} from './TeamCard.styles'
import type { TeamCardProps } from './TeamCard.props'

export const TeamCard: FC<TeamCardProps> = ({ index, data }) => {
  const navigate = useNavigate()
  const handleEdit = () => navigate(AUTH_ROUTES.TEAMS.EDIT.PATH)

  return (
    <CardContainer variant={'outlined'}>
      <InfoContainer>
        <TitleContainer>
          <TextContainer>
            <IndexTypography variant={'subtitle2'}>{index}.</IndexTypography>
            <Typography variant={'subtitle2'}>{data.team.name}</Typography>
          </TextContainer>
          <Chip
            label={data.country.name}
            icon={<FlagLogo src={data.country.flag} alt={'Country flag'} />}
          />
        </TitleContainer>
        <Typography variant={'subtitle2'} color={'primary'}>
          Total points: {data.totalPoints}
        </Typography>
      </InfoContainer>
      <ActionsContainer>
        <Button onClick={handleEdit} variant={'text'} color={'inherit'}>
          Edit
        </Button>
        <Button variant={'text'} color={'inherit'}>
          Delete
        </Button>
      </ActionsContainer>
    </CardContainer>
  )
}
