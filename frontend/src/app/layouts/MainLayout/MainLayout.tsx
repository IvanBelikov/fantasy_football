import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { CircularProgress, Container } from '@mui/material'

import { MainHeader } from '@base/widgets'

import { LayoutContainer } from './MainLayout.styles'

export const MainLayout = () => (
  <LayoutContainer>
    <MainHeader />
    <Container>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Container>
  </LayoutContainer>
)
