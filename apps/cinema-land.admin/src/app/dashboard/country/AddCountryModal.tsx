import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { Country } from '@types';
import { addCountry } from './actions';
import { useAppDispatch } from '../../../lib/hooks';
import { setToastMessage } from '../../../lib/features/toastMessage/toastMessageSlice';

type Props = {
  handleClose: () => void;
};

export default function AddCountryModal({ handleClose }: Props) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Omit<Country, 'id'>>();

  const dispatch = useAppDispatch();

  const [_, onSubmit, isPending] = useFormState(async () => {
    try {
      const country = await addCountry(getValues());

      dispatch(
        setToastMessage({
          message: `Страна "${country.name}" добавлена`,
          type: 'success',
        })
      );

      handleClose();

      return country;
    } catch (e) {
      dispatch(
        setToastMessage({
          message: 'Ошибка добавления страны',
          type: 'error',
        })
      );

      return null;
    }
  }, null);

  return (
    <Dialog onClose={handleClose} open>
      <DialogTitle>Добавление страны</DialogTitle>
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
      <DialogContent dividers>
        <form>
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
              />
            )}
            name="name"
          />
          {errors.name && <span>Обязательное поле</span>}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
