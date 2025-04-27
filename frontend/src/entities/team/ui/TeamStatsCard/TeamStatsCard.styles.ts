import { Avatar, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { grey } from '@mui/material/colors'

export const CardContainer = styled(Box)({
  backgroundColor: grey[50],
  border: '1px solid',
  borderColor: grey[300],
  borderRadius: '4px',
  maxWidth: '536px',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingBottom: '16px',
})

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  paddingTop: '16px',
  paddingBottom: '16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    gap: '8px',
  },
}))

export const TeamInfoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
})

export const TeamLogo = styled(Avatar)({
  width: '40px',
  height: '40px',
  objectFit: 'contain',
})

export const TeamInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const LeagueLogo = styled(Avatar)({
  width: '18px',
  height: '18px',
})

export const StadiumContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  paddingTop: '16px',
  paddingBottom: '16px',
})

export const StadiumLogo = styled(Avatar)({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
})

export const StadiumInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})
