import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Country, ErrorCode } from '@types';
import { addCountry } from '../actions';
import { useAppDispatch } from '@lib/hooks';
import { setToastMessage } from '@lib/features';
import { useCallback } from 'react';
import CountryDialog from './CountryDialog';

type Props = {
  handleClose: () => void;
};

export function AddCountryModal({ handleClose }: Props) {
  const { control, handleSubmit, getValues, formState } =
    useForm<Omit<Country, 'id'>>();

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
            ? `Страна с названием "${values.name}" уже существует`
            : 'Ошибка добавления страны',
        type: 'error',
      })
    );
  }, [dispatch, getValues, handleClose]);

  return (
    <CountryDialog
      title="Добавление страны"
      control={control}
      formState={formState}
      handleClose={handleClose}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
}
