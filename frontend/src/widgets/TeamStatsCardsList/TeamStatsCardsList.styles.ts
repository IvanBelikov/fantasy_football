import { Box, Grid } from '@mui/material'
import styled from 'styled-components'

export const CustomGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}))

export const LoadMoreContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
