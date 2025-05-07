import { useNavigate } from 'react-router'

import { Button, Typography } from '@mui/material'

import { PUBLIC_ROUTES } from '@base/constants'

import { PageContainer } from './NotFoundPage.styles'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate(PUBLIC_ROUTES.HOME.PATH)
  return (
    <PageContainer>
      <Typography variant={'h2'}>404 Not Found</Typography>
      <Button onClick={handleClick}>Main page</Button>
    </PageContainer>
  )
}
