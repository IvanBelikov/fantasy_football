import type { SelectChangeEvent } from '@mui/material'

export type PlayerSelectProps = {
  selectedPlayers: string[]
  handleCheckPlayer: (e: SelectChangeEvent<string[]>) => void
}
