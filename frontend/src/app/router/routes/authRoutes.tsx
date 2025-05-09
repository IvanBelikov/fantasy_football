import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router'

import { AppLayout } from '@base/app/layouts'
import { AUTH_ROUTES } from '@base/constants'

const StatisticsPage = lazy(() => import('@base/pages/StatisticsPage'))
const TeamsPage = lazy(() => import('@base/pages/TeamsPage'))
const CreateTeamPage = lazy(() => import('@base/pages/CreateTeamPage'))
const EditTeamPage = lazy(() => import('@base/pages/EditTeamPage'))
const NotFoundPage = lazy(() => import('@base/pages/NotFoundPage'))

export const authRoutes: RouteObject[] = [
  {
    path: AUTH_ROUTES.HOME.PATH,
    Component: AppLayout,
    children: [
      {
        path: '*',
        Component: NotFoundPage,
      },
      {
        index: true,
        element: <Navigate to={AUTH_ROUTES.STATISTICS.PATH} />,
      },
      {
        path: AUTH_ROUTES.STATISTICS.PATH,
        Component: StatisticsPage,
      },
      {
        path: AUTH_ROUTES.TEAMS.PATH,
        Component: TeamsPage,
      },
      {
        path: AUTH_ROUTES.TEAMS.CREATE.PATH,
        Component: CreateTeamPage,
      },
      {
        path: AUTH_ROUTES.TEAMS.EDIT.PATH,
        Component: EditTeamPage,
      },
    ],
  },
]
