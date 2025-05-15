import { useState } from 'react';
import { AddButton as AddEntityButton } from '@ui';
import { AddGenreModal } from '../modals';

export function AddButton() {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => setOpen(true);

  const handleCloseClick = () => setOpen(false);

  return (
    <>
      <AddEntityButton onClick={handleOpenClick} />
      {open && <AddGenreModal onClose={handleCloseClick} />}
    </>
  );
}
