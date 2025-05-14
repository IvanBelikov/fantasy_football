import { ListSubheader, MenuItem } from '@mui/material'
import { grey } from '@mui/material/colors'

import styled from 'styled-components'

export const SpecialMenuItem = styled(MenuItem)({
  height: '36px',
  backgroundColor: grey[200],
  color: 'GrayText',
})

export const CustomMenuItem = styled(MenuItem)({
  height: '36px',
})

export const CustomListSubheader = styled(ListSubheader)({
  lineHeight: '30px',
  backgroundColor: grey[200],
})

export const MenuProps = {
  MenuListProps: {
    disablePadding: true,
    style: {
      maxHeight: '250px',
    },
  },
}
