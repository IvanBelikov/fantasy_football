import type { SelectChangeEvent } from '@mui/material'

export interface PlayerSelectProps {
  selectedPlayers: string[]
  handleCheckPlayer: (e: SelectChangeEvent<string[]>) => void
}
