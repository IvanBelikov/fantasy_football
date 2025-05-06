import { Tabs, Button } from '@mui/material'

import { ExitToApp } from '@mui/icons-material'

import {
  HeaderContainer,
  ContentContainer,
  LogoTypography,
  Level,
  CustomTab,
  TabsContainer,
} from './MainHeader.styles'

export const MainHeader = () => {
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
      <Level>
        <TabsContainer>
          <Tabs value={1} variant={'fullWidth'}>
            <CustomTab label={'Statistics'} value={1} />
            <CustomTab label={'Fantasy Teams'} value={2} />
          </Tabs>
        </TabsContainer>
      </Level>
    </HeaderContainer>
  )
}
