import { type FC, useState } from 'react'
import { Link, useLocation } from 'react-router'

import { Tabs, Button } from '@mui/material'
import { ExitToApp } from '@mui/icons-material'

import { AUTH_ROUTES } from '@base/constants'

import { TabValues } from './types'
import { getTabValue } from './utils'

import {
  HeaderContainer,
  ContentContainer,
  LogoTypography,
  Level,
  CustomTab,
  TabsContainer,
} from './MainHeader.styles'
import type { MainHeaderProps } from './MainHeader.props'

export const MainHeader: FC<MainHeaderProps> = ({ showSubheader }) => {
  const location = useLocation()

  const [tabValue, setTabValue] = useState(getTabValue(location.pathname))

  const handleChange = (_: unknown, newValue: number) => setTabValue(newValue)

  return (
    <HeaderContainer>
      <Level isTop={true}>
        <ContentContainer>
          <LogoTypography>Fantasy league</LogoTypography>
          <Button variant={'contained'} endIcon={<ExitToApp />}>
            Logout
          </Button>
        </ContentContainer>
      </Level>
      {showSubheader && (
        <Level>
          <TabsContainer>
            <Tabs
              onChange={handleChange}
              value={tabValue}
              variant={'fullWidth'}
            >
              <CustomTab
                component={Link}
                label={'Statistics'}
                value={TabValues.STATISTICS}
                to={AUTH_ROUTES.STATISTICS.TEAMS.PATH}
              />
              <CustomTab
                component={Link}
                label={'Fantasy Teams'}
                value={TabValues.TEAMS}
                to={AUTH_ROUTES.TEAMS.PATH}
              />
            </Tabs>
          </TabsContainer>
        </Level>
      )}
    </HeaderContainer>
  )
}
