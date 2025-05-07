import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router'

import { MainLayout } from '@base/app/layouts'
import { PUBLIC_ROUTES } from '@base/constants'

const LoginPage = lazy(() => import('@base/pages/LoginPage'))
const NotFoundPage = lazy(() => import('@base/pages/NotFoundPage'))

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTES.HOME.PATH,
    Component: MainLayout,
    children: [
      {
        path: '*',
        Component: NotFoundPage,
      },
      {
        index: true,
        element: <Navigate to={PUBLIC_ROUTES.LOGIN.PATH} />,
      },
      {
        path: PUBLIC_ROUTES.LOGIN.PATH,
        Component: LoginPage,
      },
    ],
  },
]
