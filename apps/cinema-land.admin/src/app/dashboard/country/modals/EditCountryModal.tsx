import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Country } from '@types';
import { editCountry } from '../actions';
import { useAppDispatch } from '@lib/hooks';
import { setToastMessage } from '@lib/features';
import { useCallback } from 'react';
import CountryDialog from './CountryDialog';
import { createEditResultMessage } from './messages';

type Props = {
  country: Country;

  onClose: () => void;
};

export function EditCountryModal({ country, onClose }: Props) {
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

    const message = createEditResultMessage(result, values.name);

    dispatch(setToastMessage(message));

    if (result.success) {
      onClose();
    }
  }, [dispatch, country, getValues, onClose]);

  return (
    <CountryDialog
      title="Редактирование страны"
      control={control}
      formState={formState}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
