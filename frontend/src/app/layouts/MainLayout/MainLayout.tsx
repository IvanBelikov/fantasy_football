import { type FC, Suspense } from 'react'
import { Outlet } from 'react-router'
import { CircularProgress, Container } from '@mui/material'

import { MainHeader } from '@base/widgets'

import type { MainLayoutProps } from './MainLayout.props'
import { LayoutContainer } from './MainLayout.styles'

export const MainLayout: FC<MainLayoutProps> = ({ isAuth }) => (
  <LayoutContainer>
    <MainHeader showSubheader={isAuth} />
    <Container>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Container>
  </LayoutContainer>
)
