import { LoginForm } from '@base/widgets'
import { Typography } from '@mui/material'

import { PageContainer, FormContainer } from './LoginPage.styles'

export const LoginPage = () => {
  return (
    <PageContainer>
      <Typography variant={'h6'}>Login</Typography>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </PageContainer>
  )
}
