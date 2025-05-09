import { AUTH_ROUTES } from '@base/constants'

export const getTabValue = (path: string) => {
  const rootPath = `/${path.split('/')[1]}`
  switch (rootPath) {
    case AUTH_ROUTES.STATISTICS.PATH:
      return 1
    case AUTH_ROUTES.TEAMS.PATH:
      return 2
    default:
      return 1
  }
}
