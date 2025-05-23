import { Box, List } from '@mui/material'
import styled from 'styled-components'

export const ListContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const ActionsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CustomList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  paddingTop: 0,
  paddingBottom: 0,
})
