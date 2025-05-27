export const convertPlayerBirthDate = (dateStr: string) => {
  const date = new Date(dateStr)

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
