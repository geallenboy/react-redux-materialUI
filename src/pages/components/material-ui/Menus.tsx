import { MoreVert } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const OPTIONS = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content'
];

const OPTIONS_MAXHEIGHT = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
];

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function MenusComponent() {
  const [isOpen, setOpen] = useState(null);
  const [isOpenList, setOpenList] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isOpenMaxHeight, setOpenMaxHeight] = useState(null);

  const handleClick = (event: any) => {
    setOpenMaxHeight(event.currentTarget);
  };

  const handleClickListItem = (event: any) => {
    setOpenList(event.currentTarget);
  };

  const handleMenuItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    setOpenList(null);
  };

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMaxHeightClose = () => {
    setOpenMaxHeight(null);
  };

  return (
    <RootStyle title={`组件: Menus${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Menus"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Menus' }]}
            moreLink="https://mui.com/zh/material-ui/react-menu/"
          />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Block title="Simple" sx={style}>
            <Button variant="outlined" onClick={handleOpen}>
              Open Menu
            </Button>
            <Menu
              keepMounted
              id="simple-menu"
              anchorEl={isOpen}
              onClose={handleClose}
              open={Boolean(isOpen)}
            >
              {['Profile', 'My account', 'Logout'].map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Block>

          <Block title="Selected" sx={style}>
            <List component="nav" aria-label="Device settings">
              <ListItemButton
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                onClick={handleClickListItem}
              >
                <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
              </ListItemButton>
            </List>
            <Menu
              keepMounted
              id="lock-menu"
              anchorEl={isOpenList}
              onClose={handleClose}
              open={Boolean(isOpenList)}
            >
              {OPTIONS.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Block>

          <Block title="Max height" sx={style}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              keepMounted
              id="long-menu"
              anchorEl={isOpenMaxHeight}
              onClose={handleMaxHeightClose}
              open={Boolean(isOpenMaxHeight)}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '20ch'
                }
              }}
            >
              {OPTIONS_MAXHEIGHT.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleMaxHeightClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}