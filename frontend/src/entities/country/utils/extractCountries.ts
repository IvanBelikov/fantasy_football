import type { Country } from '@base/schemas'

export const extractCountries = (countries: Country[]) =>
  countries.reduce<string[]>((acc, country) => [...acc, country.name], [])
