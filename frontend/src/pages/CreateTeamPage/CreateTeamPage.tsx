import { Typography } from '@mui/material'
import { TeamForm, FormModes } from '@base/widgets'

import { PageContainer } from './CreateTeamPage.styles'

export const CreateTeamPage = () => {
  return (
    <PageContainer>
      <Typography variant={'h6'}>Create Team</Typography>
      <TeamForm mode={FormModes.Create} />
    </PageContainer>
  )
}
