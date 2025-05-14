import { Box, type BoxProps } from '@mui/material'
import styled from 'styled-components'

export const Form = styled(Box)<BoxProps>({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
})

export const InputsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})
