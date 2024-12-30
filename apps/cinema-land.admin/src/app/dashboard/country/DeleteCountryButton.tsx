import * as React from 'react';

import { Country } from '@types';
import { Modal } from '@ui';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  country: Country;

  deleteCountry: (id: number) => void;
}

export default function DeleteCountryButton({ country, deleteCountry }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    setOpen(false);
    deleteCountry(country.id);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Modal.Confirm
          title="Подтвердите удаление"
          okButtonTitle="Удалить"
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        >
          Вы действительно хотите удалить страну {`"${country.name}"`}?
        </Modal.Confirm>
      )}
      <Tooltip title="Удалить">
        <IconButton onClick={handleOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
