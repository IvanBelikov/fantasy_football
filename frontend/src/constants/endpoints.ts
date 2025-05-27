enum TeamsByYearParams {
  Year = 'year',
  Page = 'page',
  Limit = 'per_page',
}

enum PlayersByYearParams {
  Year = 'year',
  Page = 'page',
  Limit = 'per_page',
}

export const ENDPOINTS = {
  GET_SEASONS: '/seasons',
  GET_COUNTRIES: '/countries',
  GET_TEAMS_BY_YEAR: {
    PATH: '/teams-by-year',
    PARAMS: TeamsByYearParams,
  },
  GET_PLAYERS_BY_YEAR: {
    PATH: '/players-by-year',
    PARAMS: PlayersByYearParams,
  },
}
