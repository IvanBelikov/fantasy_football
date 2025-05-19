import {
  Box,
  Button,
  type ButtonProps,
  Select,
  alpha,
  styled,
} from '@mui/material'

import type { LinkProps } from 'react-router'

interface TabButtonProps extends ButtonProps, Pick<LinkProps, 'to'> {
  isActive: boolean
}

export const PageContainer = styled(Box)({
  marginTop: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const LinkButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<TabButtonProps>(({ theme, isActive }) => ({
  width: '110px',
  backgroundColor: isActive
    ? alpha(theme.palette.primary.main, 0.24)
    : 'inherit',
}))

export const YearSelect = styled(Select<string>)({
  maxWidth: '220px',
})
