'use client';

import { useState } from 'react';
import { EditButton as EditEntityButton } from '@ui';
import { EditGenreModal } from '../modals';
import { Genre } from '@types';

interface Props {
  genre: Genre;
}

export function EditButton({ genre }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => setOpen(true);

  const handleCloseClick = () => setOpen(false);

  return (
    <>
      <EditEntityButton onClick={handleOpenClick} />
      {open && <EditGenreModal genre={genre} onClose={handleCloseClick} />}
    </>
  );
}
