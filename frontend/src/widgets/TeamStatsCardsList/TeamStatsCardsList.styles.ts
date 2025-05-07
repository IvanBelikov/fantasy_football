import { Grid, styled } from '@mui/material'

export const CustomGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}))
