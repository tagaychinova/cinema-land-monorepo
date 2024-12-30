import * as React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  title: string;
  children: React.ReactNode;
  cancelButtonTitle?: string;
  okButtonTitle?: string;

  handleCancel: () => void;
  handleConfirm: () => void;
};

export default function ConfirmModal({
  title,
  children,
  cancelButtonTitle = 'Отмена',
  okButtonTitle = 'Да',
  handleCancel,
  handleConfirm,
}: Props) {
  return (
    <Dialog data-testid="dialog" onClose={handleCancel} open>
      <DialogTitle data-testid="dialog-title">{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCancel}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>{cancelButtonTitle}</Button>
        <Button onClick={handleConfirm}>{okButtonTitle}</Button>
      </DialogActions>
    </Dialog>
  );
}
