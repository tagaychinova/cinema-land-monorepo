import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Genre } from '@types';
import { addGenre } from '../actions';
import { useAppDispatch } from '@lib/hooks';
import { setToastMessage } from '@lib/features';
import { useCallback } from 'react';
import { GenreDialog } from './GenreDialog';
import { createAddResultMessage } from './messages';

type Props = {
  onClose: () => void;
};

export function AddGenreModal({ onClose }: Props) {
  const { control, handleSubmit, getValues, formState } =
    useForm<Omit<Genre, 'id'>>();

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(async () => {
    const values = getValues();

    const result = await addGenre(values);

    const message = createAddResultMessage(result, values.name);

    dispatch(setToastMessage(message));

    if (result.success) {
      onClose();
    }
  }, [dispatch, getValues, onClose]);

  return (
    <GenreDialog
      title="Добавление жанра"
      control={control}
      formState={formState}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
