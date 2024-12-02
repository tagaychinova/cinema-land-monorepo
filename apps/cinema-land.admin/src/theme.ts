'use client';
import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';

const theme = createTheme(ruRU, {
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;
