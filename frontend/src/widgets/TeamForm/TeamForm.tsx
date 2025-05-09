import type { FC } from 'react'
import { useNavigate } from 'react-router'

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

import { AUTH_ROUTES } from '@base/constants'

import { PlayerSelect } from './ui/PlayerSelect'

import type { TeamFormProps } from './TeamForm.props'
import { ActionsContainer, CustomForm } from './TeamForm.styles'

export const TeamForm: FC<TeamFormProps> = () => {
  const navigate = useNavigate()

  const handleCheckPlayers = () => {
    return
  }

  const handleBackClick = () => {
    navigate(AUTH_ROUTES.TEAMS.PATH)
  }

  return (
    <CustomForm>
      <TextField label={'Team name'} size={'small'} required />
      <FormControl>
        <InputLabel required size={'small'} id={'countryLabel'}>
          Country
        </InputLabel>
        <Select
          labelId={'countryLabel'}
          label={'Country'}
          size={'small'}
          value={''}
          required
        >
          <MenuItem value={'USA'}>USA</MenuItem>
          <MenuItem value={'England'}>England</MenuItem>
          <MenuItem value={'Germany'}>Germany</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel required size={'small'} id={'competitionLabel'}>
          Competition
        </InputLabel>
        <Select
          labelId={'competitionLabel'}
          label={'competition'}
          size={'small'}
          value={''}
          required
        >
          <MenuItem value={'FA Cup'}>FA Cup</MenuItem>
          <MenuItem value={'Community Shield'}>Community Shield</MenuItem>
          <MenuItem value={'U18 Premier League'}>U18 Premier League</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel required size={'small'} id={'lineupLabel'}>
          Team line-up
        </InputLabel>
        <Select
          labelId={'lineupLabel'}
          label={'team line-up'}
          size={'small'}
          value={''}
          required
        >
          <MenuItem value={'4-4-2'}>4-4-2</MenuItem>
          <MenuItem value={'3-5-2'}>3-5-2</MenuItem>
          <MenuItem value={'5-3-2'}>5-3-2</MenuItem>
        </Select>
      </FormControl>
      <PlayerSelect
        selectedPlayers={[]}
        handleCheckPlayer={handleCheckPlayers}
      />
      <ActionsContainer>
        <Button
          onClick={handleBackClick}
          variant={'contained'}
          color={'inherit'}
          disableElevation
        >
          Back
        </Button>
        <Button type={'submit'} variant={'contained'} disableElevation>
          Save
        </Button>
      </ActionsContainer>
    </CustomForm>
  )
}
