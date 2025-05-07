import { Button, TextField } from '@mui/material'

import { Form, InputsContainer } from './LoginForm.styles'

export const LoginForm = () => {
  return (
    <Form component={'form'}>
      <InputsContainer>
        <TextField label={'Name'} size={'small'} required fullWidth />
        <TextField label={'Password'} size={'small'} required fullWidth />
      </InputsContainer>
      <Button variant={'contained'} type={'submit'}>
        Login
      </Button>
    </Form>
  )
}
