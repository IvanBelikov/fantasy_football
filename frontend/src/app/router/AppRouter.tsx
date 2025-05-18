import { Navigate, Route, Routes } from 'react-router'

import { PrivateRoutes } from './PrivateRoutes'
import { lazy } from 'react'
import { AUTH_ROUTES, PUBLIC_ROUTES } from '@base/constants'

import { MainLayout } from '../layouts'

const StatisticsPage = lazy(() => import('@base/pages/StatisticsPage'))
const TeamsPage = lazy(() => import('@base/pages/TeamsPage'))
const CreateTeamPage = lazy(() => import('@base/pages/CreateTeamPage'))
const EditTeamPage = lazy(() => import('@base/pages/EditTeamPage'))
const NotFoundPage = lazy(() => import('@base/pages/NotFoundPage'))
const LoginPage = lazy(() => import('@base/pages/LoginPage'))

export const AppRouter = () => {
  const isAuth = true // TODO: replace with actual auth check
  return (
    <Routes>
      <Route element={<MainLayout isAuth={isAuth} />}>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to={AUTH_ROUTES.STATISTICS.PATH} replace />
            ) : (
              <Navigate to={PUBLIC_ROUTES.LOGIN.PATH} replace />
            )
          }
        />

        {/* AUTH ROUTES */}
        <Route element={<PrivateRoutes isAuth={isAuth} />}>
          <Route
            path={AUTH_ROUTES.STATISTICS.PATH}
            element={<StatisticsPage />}
          />
          <Route path={AUTH_ROUTES.TEAMS.PATH} element={<TeamsPage />} />
          <Route
            path={AUTH_ROUTES.TEAMS.CREATE.PATH}
            element={<CreateTeamPage />}
          />
          <Route
            path={AUTH_ROUTES.TEAMS.EDIT.PATH}
            element={<EditTeamPage />}
          />
        </Route>

        {/* PUBLIC ROUTES */}
        <Route
          path={PUBLIC_ROUTES.LOGIN.PATH}
          element={
            isAuth ? (
              <Navigate to={AUTH_ROUTES.STATISTICS.PATH} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
