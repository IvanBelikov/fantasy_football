import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { CircularProgress, Container } from '@mui/material'

import { MainHeader } from '@base/widgets'

import { LayoutContainer } from './AppLayout.styles'

export const AppLayout = () => (
  <LayoutContainer>
    <MainHeader showSubheader />
    <Container>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Container>
  </LayoutContainer>
)
