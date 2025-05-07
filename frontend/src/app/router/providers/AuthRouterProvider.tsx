import { createBrowserRouter, RouterProvider } from 'react-router'

import { authRoutes } from '../routes'

export const AuthRouterProvider = () => {
  const router = createBrowserRouter(authRoutes)

  return <RouterProvider router={router} />
}
