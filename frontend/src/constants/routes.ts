export const PUBLIC_ROUTES = {
  HOME: {
    PATH: '/',
  },
  LOGIN: {
    PATH: '/login',
  },
  SIGNUP: {
    PATH: '/sign-up',
  },
}

export const AUTH_ROUTES = {
  HOME: {
    PATH: '/',
  },
  STATISTICS: {
    PATH: '/statistics',
    TEAMS: {
      PATH: '/statistics/teams',
    },
    PLAYERS: {
      PATH: 'statistics/players',
    },
  },
  TEAMS: {
    PATH: '/teams',
    CREATE: {
      PATH: '/teams/create',
    },
    EDIT: {
      PATH: '/teams/edit',
    },
  },
}
