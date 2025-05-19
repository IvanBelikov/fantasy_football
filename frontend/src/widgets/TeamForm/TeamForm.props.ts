import type { FormModes } from './types'

type TeamFormCreateMode = {
  mode: FormModes.Create
  teamId?: never
}

type TeamFormEditMode = {
  mode: FormModes.Edit
  teamId: string | number
}

export type TeamFormProps = TeamFormCreateMode | TeamFormEditMode
