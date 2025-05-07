import { TeamForm, FormModes } from '@base/widgets'

import { PageContainer } from './EditTeamPage.styles'

export const EditTeamPage = () => {
  return (
    <PageContainer>
      <h1>Edit Team</h1>
      <TeamForm mode={FormModes.Edit} teamId={1} />
    </PageContainer>
  )
}
