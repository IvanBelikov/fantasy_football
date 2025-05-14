import { Typography } from '@mui/material'
import { TeamForm, FormModes } from '@base/widgets'

import { PageContainer } from './EditTeamPage.styles'

export const EditTeamPage = () => {
  return (
    <PageContainer>
      <Typography variant={'h5'}>Edit Team</Typography>
      <TeamForm mode={FormModes.Edit} teamId={1} />
    </PageContainer>
  )
}
