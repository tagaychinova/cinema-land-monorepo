import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Genre } from '@types';
import { editGenre } from '../actions';
import { useAppDispatch } from '@lib/hooks';
import { setToastMessage } from '@lib/features';
import { useCallback } from 'react';
import { GenreDialog } from './GenreDialog';
import { createEditResultMessage } from './messages';

type Props = {
  genre: Genre;

  onClose: () => void;
};

export function EditGenreModal({ genre, onClose }: Props) {
  const { control, handleSubmit, getValues, formState } = useForm<
    Omit<Genre, 'id'>
  >({
    defaultValues: {
      name: genre.name,
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(async () => {
    const values = getValues();

    const result = await editGenre({
      id: genre.id,
      ...values,
    });

    const message = createEditResultMessage(result, values.name);

    dispatch(setToastMessage(message));

    if (result.success) {
      onClose();
    }
  }, [dispatch, genre, getValues, onClose]);

  return (
    <GenreDialog
      title="Редактирование жанра"
      control={control}
      formState={formState}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
