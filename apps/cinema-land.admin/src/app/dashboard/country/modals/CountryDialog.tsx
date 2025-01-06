import * as React from 'react';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Control, Controller, FormState } from 'react-hook-form';
import { Country } from '@types';

type Props = {
  title: string;
  control: Control<Omit<Country, 'id'>, any>;
  formState: FormState<Omit<Country, 'id'>>;
  handleClose: () => void;
  handleSubmit: () => Promise<void>;
};

export default function CountryDialog({
  title,
  control,
  formState,
  handleClose,
  handleSubmit,
}: Props) {
  const { errors, isSubmitting } = formState;
  return (
    <Dialog onClose={handleClose} open>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <form onSubmit={handleSubmit}>
        <DialogContent
          dividers
          sx={() => ({
            minWidth: 500,
          })}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            defaultValue={''}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                label="Название"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                autoComplete="off"
                sx={() => ({
                  width: '100%',
                })}
                {...(errors.name
                  ? {
                      error: true,
                      helperText: 'Обязательное поле',
                    }
                  : {})}
              />
            )}
            name="name"
          />
        </DialogContent>
        <DialogActions>
          {isSubmitting && <CircularProgress size={16} />}
          <Button type="submit" disabled={isSubmitting}>
            Сохранить
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
