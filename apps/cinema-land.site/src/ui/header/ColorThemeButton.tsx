'use client';

import { Button } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { toggleTheme } from '@lib/features';
import { MoonIcon, SunIcon } from '@icons';

export default function ColorThemeButton() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleToggleThemeClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button onClick={handleToggleThemeClick}>
      {theme.value === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
