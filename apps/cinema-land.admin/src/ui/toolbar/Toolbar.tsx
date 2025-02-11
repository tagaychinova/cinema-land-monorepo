'use client';

import * as React from 'react';
import { Toolbar as MuiToolbar, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { AppBar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { toggleNavbar } from '@lib/features';
import { logout } from './actions';
import Link from 'next/link';

export function Toolbar() {
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
        <Link href="/">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cinema Land. Admin Dashboard
          </Typography>
        </Link>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </MuiToolbar>
    </AppBar>
  );
}
