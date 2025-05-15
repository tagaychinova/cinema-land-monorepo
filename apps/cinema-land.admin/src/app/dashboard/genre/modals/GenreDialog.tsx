import * as React from 'react';
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import { Control, Controller, FormState } from 'react-hook-form';
import { Genre } from '@types';
import { Modal } from '@ui';

type Props = {
  title: string;
  control: Control<Omit<Genre, 'id'>, any>;
  formState: FormState<Omit<Genre, 'id'>>;

  onClose: () => void;
  onSubmit: () => Promise<void>;
};

export function GenreDialog({
  title,
  control,
  formState,
  onClose,
  onSubmit,
}: Props) {
  const { errors, isSubmitting } = formState;
  return (
    <Modal.Dialog title={title} onClose={onClose}>
      <form onSubmit={onSubmit}>
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
    </Modal.Dialog>
  );
}
