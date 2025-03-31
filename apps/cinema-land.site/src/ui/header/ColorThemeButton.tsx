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
    <Button
      onClick={handleToggleThemeClick}
      className="flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg w-10 h-10"
    >
      {theme.value === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
