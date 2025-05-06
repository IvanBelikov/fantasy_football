import type { Team, Country } from '@base/schemas'

export type TeamCardProps = {
  index: number
  data: {
    team: Team
    country: Country
    totalPoints: number
  }
}
