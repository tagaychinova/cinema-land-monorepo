import * as React from 'react';

import { Button, DialogActions, DialogContent } from '@mui/material';
import { Dialog } from './Dialog';

type Props = {
  title: string;
  children: React.ReactNode;
  cancelButtonTitle?: string;
  okButtonTitle?: string;

  onCancel: () => void;
  onConfirm: () => void;
};

export default function ConfirmModal({
  title,
  children,
  cancelButtonTitle = 'Отмена',
  okButtonTitle = 'Да',
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Dialog title={title} onClose={onCancel}>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{cancelButtonTitle}</Button>
        <Button onClick={onConfirm}>{okButtonTitle}</Button>
      </DialogActions>
    </Dialog>
  );
}
