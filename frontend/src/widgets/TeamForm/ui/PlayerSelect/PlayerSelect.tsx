import type { FC } from 'react'
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  Select,
} from '@mui/material'

import { SpecialSelect } from '../../types'

// Mock players before backend implementation
import { players } from '../../mock'

import type { PlayerSelectProps } from './PlayerSelect.props'
import {
  CustomMenuItem,
  CustomListSubheader,
  SpecialMenuItem,
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
        <SpecialMenuItem divider value={SpecialSelect.All}>
          <Checkbox size={'small'} />
          <ListItemText
            primary={'Select all'}
            slotProps={{
              primary: { variant: 'body2' },
            }}
          />
        </SpecialMenuItem>
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
