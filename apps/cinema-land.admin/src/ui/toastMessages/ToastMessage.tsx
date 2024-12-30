'use client';

import { Alert, Snackbar } from '@mui/material';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { deleteToastMessage } from '../../lib/features/toastMessage/toastMessageSlice';

export function ToastMessage() {
  const toastMessage = useAppSelector((state) => state.toastMessage.value);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(deleteToastMessage());
  };

  if (!toastMessage) {
    return null;
  }

  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={toastMessage.type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {toastMessage.message}
      </Alert>
    </Snackbar>
  );
}
