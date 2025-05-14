import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'

import { PUBLIC_ROUTES } from '@base/constants'

import type { PrivateRoutesProps } from './PrivateRoutes.props'

export const PrivateRoutes: FC<PrivateRoutesProps> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={PUBLIC_ROUTES.LOGIN.PATH} />
}
