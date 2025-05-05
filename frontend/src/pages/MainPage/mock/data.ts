export const mockTeam = {
  team: {
    id: '33',
    name: 'Manchester United',
    logo: 'https://media.api-sports.io/football/teams/33.png',
    founded: 1976,
  },
  league: {
    id: 'string',
    name: 'Premier League',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    country: {
      name: 'England',
      code: 'GB-ENG',
      flag: 'https://media.api-sports.io/flags/gb-eng.svg',
    },
  },
  venue: {
    name: 'Old Trafford',
    image: 'https://media.api-sports.io/football/venues/556.png',
    capacity: 0,
    address: 'Sir Matt Busby Way',
  },
  stats: {
    played: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    goals: 0,
    totalPoints: 0,
  },
}

export const mockPlayer = {
  player: {
    id: '29',
    name: 'Bukayo Saka',
    age: 29,
    photo: 'https://media.api-sports.io/football/players/1440.png',
    birth: 'September 5, 2001',
    height: '178cm',
    weight: '69kg',
  },
  team: {
    name: 'Arsenal F.C',
    logo: 'https://media.api-sports.io/football/teams/42.png',
  },
  league: {
    name: 'UEFA Champions League',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
  },
  games: {
    appearances: 15,
    position: 'Defender',
    rating: 6,
    captain: true,
    losses: 100,
  },
  goals: {
    total: 0,
    conceded: 0,
    assists: 0,
    saves: 0,
  },
  passes: {
    total: 0,
    key: 0,
  },
  cards: {
    yellow: 0,
    yellowred: 0,
    red: 0,
  },
  penalty: {
    won: 0,
    committed: 0,
    scored: 0,
    missed: 0,
    saved: 0,
  },
  duels: {
    total: 0,
    won: 0,
  },
}
