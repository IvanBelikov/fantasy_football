import { Avatar, Box, Chip } from '@mui/material'
import { grey } from '@mui/material/colors'

import { styled } from '@mui/material/styles'

export const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: grey[50],
  border: '1px solid',
  borderColor: grey[300],
  borderRadius: '4px',
  maxWidth: '1000px',
  padding: '16px',
})

export const PlayerInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '8px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: '0px',
  },
}))

export const PlayerDetails = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
})

export const PlayerImage = styled(Avatar)({
  width: '40px',
  height: '40px',
  objectFit: 'contain',
  borderRadius: '4px',
})

export const Info = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const AffiliationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-end',
  },
}))

export const StyledChip = styled(Chip)({
  width: 'fit-content',
})

export const AffiliationLogo = styled(Avatar)({
  width: 18,
  height: 18,
})
