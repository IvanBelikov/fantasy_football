import type { SeasonType } from '@base/schemas'

export const extractAvaliableSeasons = (seasons: SeasonType[]) =>
  seasons.reduce<number[]>((acc, season) => [...acc, season.year], [])
