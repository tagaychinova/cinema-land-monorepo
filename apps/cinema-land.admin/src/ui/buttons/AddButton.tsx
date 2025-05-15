'use client';

import { Button } from '@mui/material';

interface Props {
  onClick?: () => void;
}

export function AddButton({ onClick }: Props) {
  return (
    <Button variant="contained" onClick={onClick}>
      Добавить
    </Button>
  );
}
