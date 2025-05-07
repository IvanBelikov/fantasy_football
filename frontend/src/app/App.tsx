import { AuthRouterProvider, PublicRouterProvider } from './router'

export const App = () => {
  const isAuth = true

  const RouterProvider = isAuth ? AuthRouterProvider : PublicRouterProvider

  return <RouterProvider />
}
