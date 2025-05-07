import type { FormModes } from './types'

interface TeamFormCreateMode {
  mode: FormModes.Create
  teamId?: never
}

interface TeamFormEditMode {
  mode: FormModes.Edit
  teamId: string | number
}

export type TeamFormProps = TeamFormCreateMode | TeamFormEditMode
