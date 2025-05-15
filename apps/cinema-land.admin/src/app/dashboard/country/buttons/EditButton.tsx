import { useState } from 'react';
import { EditButton as EditEntityButton } from '@ui';
import { EditCountryModal } from '../modals';
import { Country } from '@types';

interface Props {
  country: Country;
}

export function EditButton({ country }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => setOpen(true);

  const handleCloseClick = () => setOpen(false);

  return (
    <>
      <EditEntityButton onClick={handleOpenClick} />
      {open && (
        <EditCountryModal country={country} onClose={handleCloseClick} />
      )}
    </>
  );
}
