import { Favorite, PersonPin, Phone } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Stack, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
};

const SIMPLE_TAB = [
  { value: '1', icon: <Phone />, label: 'Item One', disabled: false },
  { value: '2', icon: <Favorite />, label: 'Item Two', disabled: false },
  { value: '3', icon: <PersonPin />, label: 'Item Three', disabled: true }
];

const SCROLLABLE_TAB = [
  { value: '1', icon: <Phone />, label: 'Item 1' },
  { value: '2', icon: <Favorite />, label: 'Item 2' },
  { value: '3', icon: <PersonPin />, label: 'Item 3' },
  { value: '4', icon: <PersonPin />, label: 'Item 4' },
  { value: '5', icon: <PersonPin />, label: 'Item 5' },
  { value: '6', icon: <PersonPin />, label: 'Item 6' },
  { value: '7', icon: <PersonPin />, label: 'Item 7' }
];

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function TabsComponent() {
  const [value, setValue] = useState('1');
  const [valueScrollable, setValueScrollable] = useState('1');

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleChangeScrollable = (event: any, newValue: any) => {
    setValueScrollable(newValue);
  };

  return (
    <RootStyle title={`组件: Tabs${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Tabs"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Tabs' }]}
            moreLink="https://mui.com/zh/material-ui/react-tabs/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
            <Block title="Text" sx={style}>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  {SIMPLE_TAB.map((tab: any, index: number) => (
                    <Tab key={tab.value} label={tab.label} value={String(index + 1)} />
                  ))}
                </TabList>
                <Box
                  sx={{
                    p: 2,
                    mt: 2,
                    height: 80,
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: 'grey.50012'
                  }}
                >
                  {SIMPLE_TAB.map((panel: any, index: number) => (
                    <TabPanel key={panel.value} value={String(index + 1)}>
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </Block>

            <Block title="Icon" sx={style}>
              <Tabs value={value} onChange={handleChange}>
                {SIMPLE_TAB.map((tab: any) => (
                  <Tab key={tab.value} icon={tab.icon} value={tab.value} />
                ))}
              </Tabs>
            </Block>
          </Stack>

          <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
            <Block title="Text & Icon" sx={style}>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  {SIMPLE_TAB.map((tab: any) => (
                    <Tab
                      key={tab.value}
                      icon={tab.icon}
                      label={tab.label}
                      value={tab.value}
                      disabled={tab.disabled}
                    />
                  ))}
                </TabList>
              </TabContext>
            </Block>

            <Block title="Scrollable" sx={style}>
              <Box
                sx={{
                  flexGrow: 1,
                  width: '100%',
                  maxWidth: 320
                }}
              >
                <Tabs
                  allowScrollButtonsMobile
                  value={valueScrollable}
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={handleChangeScrollable}
                >
                  {SCROLLABLE_TAB.map((tab: any) => (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                  ))}
                </Tabs>
              </Box>
            </Block>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}