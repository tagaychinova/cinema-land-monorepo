import * as React from 'react';

import { Dialog as MuiDialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  title: string;
  children: React.ReactNode;

  onClose: () => void;
};

export function Dialog({ title, children, onClose }: Props) {
  return (
    <MuiDialog onClose={onClose} open>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </MuiDialog>
  );
}
