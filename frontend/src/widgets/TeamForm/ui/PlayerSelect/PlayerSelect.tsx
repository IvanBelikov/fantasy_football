import type { FC } from 'react'
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  Select,
} from '@mui/material'

// Mock players before backend implementation
import { players } from '../../mock'

import type { PlayerSelectProps } from './PlayerSelect.props'
import {
  CustomMenuItem,
  CustomListSubheader,
  MenuProps,
} from './PlayerSelect.styles'

export const PlayerSelect: FC<PlayerSelectProps> = ({
  selectedPlayers,
  handleCheckPlayer,
}) => {
  return (
    <FormControl>
      <InputLabel required size={'small'} id={'playersLabel'}>
        Players
      </InputLabel>
      <Select
        onChange={handleCheckPlayer}
        labelId={'playersLabel'}
        label={'players'}
        size={'small'}
        value={selectedPlayers}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        required
        multiple
      >
        <CustomListSubheader>Goalkeeper</CustomListSubheader>
        {players.goalkeepers.map(({ id, name }) => (
          <CustomMenuItem key={id} value={name} divider>
            <Checkbox size={'small'} checked={selectedPlayers.includes(name)} />
            <ListItemText
              primary={name}
              slotProps={{
                primary: { variant: 'body2' },
              }}
            />
          </CustomMenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
