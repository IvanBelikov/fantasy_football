import { TeamForm, FormModes } from '@base/widgets'

import { PageContainer } from './CreateTeamPage.styles'

export const CreateTeamPage = () => {
  return (
    <PageContainer>
      <h1>Create Team</h1>
      <TeamForm mode={FormModes.Create} />
    </PageContainer>
  )
}
