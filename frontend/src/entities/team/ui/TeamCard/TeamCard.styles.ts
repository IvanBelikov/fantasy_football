import { Avatar, Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

import { styled } from '@mui/material/styles'

export const CardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: grey[50],
  border: '1px solid',
  borderColor: grey[300],
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}))

export const TitleContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
})

export const InfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const TextContainer = styled(Box)({
  display: 'flex',
})

export const IndexTypography = styled(Typography)({
  width: '21px',
  height: '21px',
  textAlign: 'center',
})

export const FlagLogo = styled(Avatar)({
  width: '16px',
  height: '16px',
  objectFit: 'contain',
})

export const ActionsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
