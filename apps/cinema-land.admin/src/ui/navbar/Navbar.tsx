'use client';

import { Box, Stack } from '@mui/material';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { NavItem } from './NavItem';
import { useAppSelector } from '@lib/hooks';

export function Navbar() {
  const isNavbarOpened = useAppSelector((state) => state.navbar.isOpened);

  return (
    <Box component="nav" sx={{ bgcolor: 'primary.main' }}>
      <Stack
        component="ul"
        sx={(theme) => ({
          listStyle: 'none',
          m: 0,
          p: 0,
          width: isNavbarOpened ? 180 : 72,
          transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn}`,
        })}
      >
        <NavItem
          Icon={SlideshowOutlinedIcon}
          title="Видео"
          href="/dashboard/movie"
          showTitle={isNavbarOpened}
        />
        <NavItem
          Icon={PublicOutlinedIcon}
          title="Страны"
          href="/dashboard/country"
          showTitle={isNavbarOpened}
        />
        <NavItem
          Icon={HubOutlinedIcon}
          title="Жанры"
          href="/dashboard/genre"
          showTitle={isNavbarOpened}
        />
      </Stack>
    </Box>
  );
}
