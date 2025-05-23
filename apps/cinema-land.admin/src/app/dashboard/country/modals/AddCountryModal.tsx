import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Country } from '@types';
import { addCountry } from '../actions';
import { useAppDispatch } from '@lib/hooks';
import { setToastMessage } from '@lib/features';
import { useCallback } from 'react';
import CountryDialog from './CountryDialog';
import { createAddResultMessage } from './messages';

type Props = {
  onClose: () => void;
};

export function AddCountryModal({ onClose }: Props) {
  const { control, handleSubmit, getValues, formState } =
    useForm<Omit<Country, 'id'>>();

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(async () => {
    const values = getValues();

    const result = await addCountry(values);

    const message = createAddResultMessage(result, values.name);

    dispatch(setToastMessage(message));

    if (result.success) {
      onClose();
    }
  }, [dispatch, getValues, onClose]);

  return (
    <CountryDialog
      title="Добавление страны"
      control={control}
      formState={formState}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
