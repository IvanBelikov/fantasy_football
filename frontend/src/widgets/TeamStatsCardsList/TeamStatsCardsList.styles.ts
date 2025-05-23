import { Grid } from '@mui/material'
import styled from 'styled-components'

export const CustomGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}))
