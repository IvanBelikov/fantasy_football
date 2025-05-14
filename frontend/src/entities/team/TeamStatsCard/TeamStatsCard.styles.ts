import { Avatar, Box } from '@mui/material'
import { grey } from '@mui/material/colors'

import styled from 'styled-components'

export const CardContainer = styled(Box)({
  backgroundColor: grey[50],
  border: '1px solid',
  borderColor: grey[300],
  borderRadius: '4px',
  width: '536px',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingBottom: '16px',
})

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column-reverse',
  alignItems: 'start',
  paddingTop: '16px',
  paddingBottom: '16px',
  gap: '8px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: '0px',
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
  '&&': {
    width: '18px',
    height: '18px',
  },
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
