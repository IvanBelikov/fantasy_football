import type { SeasonsType } from '@base/schemas'

export const extractAvaliableSeasons = (seasons: SeasonsType) =>
  seasons.reduce<number[]>((acc, season) => [...acc, season.year], [])
