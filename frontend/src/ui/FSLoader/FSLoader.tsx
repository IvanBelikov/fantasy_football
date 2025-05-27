import { CircularProgress } from '@mui/material'

import { LoaderContainer } from './FSLoader.styles'

export const FSLoader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  )
}
