import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Country, ErrorCode } from '@types';
import { addCountry } from './actions';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../lib/hooks';
import { setToastMessage } from '../../../lib/features/toastMessage/toastMessageSlice';
import { useCallback } from 'react';

type Props = {
  handleClose: () => void;
};

export default function AddCountryModal({ handleClose }: Props) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Omit<Country, 'id'>>();

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(async () => {
    const values = getValues();

    const result = await addCountry(values);

    if (result.success) {
      dispatch(
        setToastMessage({
          message: `Страна "${result.payload.name}" добавлена`,
          type: 'success',
        })
      );

      handleClose();

      return;
    }

    dispatch(
      setToastMessage({
        message:
          result.error.code === ErrorCode.NotUnique
            ? `Страна названием "${values.name}" уже существует`
            : 'Ошибка добавления страны',
        type: 'error',
      })
    );
  }, [dispatch, getValues, handleClose]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
