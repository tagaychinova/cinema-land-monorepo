'use client';

import * as React from 'react';
import { Toolbar as MuiToolbar, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { AppBar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { toggleNavbar } from '@lib/features';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import UserMenu from './UserMenu';

interface Props {
  username: string;
}

const LogoLink = styled(Link)(() => ({
  flexGrow: 1,
}));

export function Toolbar({ username }: Props) {
  const isNavbarOpened = useAppSelector((state) => state.navbar.isOpened);
  const dispatch = useAppDispatch();

  const handleNavbarIconClick = () => {
    dispatch(toggleNavbar());
  };

  return (
    <AppBar position="static">
      <MuiToolbar>
        <Tooltip title={isNavbarOpened ? 'Свернуть меню' : 'Развернуть меню'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleNavbarIconClick}
          >
            {isNavbarOpened ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton>
        </Tooltip>
        <LogoLink href="/" className="">
          <Typography variant="h6">Cinema Land. Admin Dashboard</Typography>
        </LogoLink>
        <UserMenu username={username} />
      </MuiToolbar>
    </AppBar>
  );
}
