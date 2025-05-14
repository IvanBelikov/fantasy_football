import { AUTH_ROUTES } from '@base/constants'

import { TabValues } from '../types'

export const getTabValue = (path: string) => {
  const rootPath = `/${path.split('/')[1]}`
  switch (rootPath) {
    case AUTH_ROUTES.STATISTICS.PATH:
      return TabValues.STATISTICS
    case AUTH_ROUTES.TEAMS.PATH:
      return TabValues.TEAMS
    default:
      return TabValues.STATISTICS
  }
}
