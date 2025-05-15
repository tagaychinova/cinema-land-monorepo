'use client';

import { useState } from 'react';

import { Modal } from '@ui';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  confirmMessage: React.ReactNode;

  deleteAction: () => void;
}

export function DeleteButton({ confirmMessage, deleteAction }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    setOpen(false);
    deleteAction();
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
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        >
          {confirmMessage}
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
