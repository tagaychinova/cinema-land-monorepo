import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Country, ErrorCode } from '@types';
import { editCountry } from '../actions';
import { useAppDispatch } from '../../../../lib/hooks';
import { setToastMessage } from '../../../../lib/features/toastMessage/toastMessageSlice';
import { useCallback } from 'react';
import CountryDialog from './CountryDialog';

type Props = {
  country: Country;
  handleClose: () => void;
};

export function EditCountryModal({ country, handleClose }: Props) {
  const { control, handleSubmit, getValues, formState } = useForm<
    Omit<Country, 'id'>
  >({
    defaultValues: {
      name: country.name,
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(async () => {
    const values = getValues();

    const result = await editCountry({
      id: country.id,
      ...values,
    });

    if (result.success) {
      dispatch(
        setToastMessage({
          message: `Страна "${result.payload.name}" отредактирована`,
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
            : 'Ошибка редактирования страны',
        type: 'error',
      })
    );
  }, [dispatch, country, getValues, handleClose]);

  return (
    <CountryDialog
      title="Редактирование страны"
      control={control}
      formState={formState}
      handleClose={handleClose}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
}
