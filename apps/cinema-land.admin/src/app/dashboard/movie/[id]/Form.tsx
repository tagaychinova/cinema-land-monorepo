'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Movie } from '@types';
import { Box, Button, Stack } from '@mui/material';
import { useGetCountriesQuery, useGetGenresQuery } from '@lib/services';
import { FormController } from '@ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { movieFormSchema } from '@validation';

interface Props {
  movie: Movie;
}

export default function Form({ movie }: Props) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    values: movie,
    resolver: zodResolver(movieFormSchema),
  });

  const onSubmit = useCallback(() => {
    console.log(getValues());
  }, [getValues]);

  return (
    <Box sx={{ m: 2, mb: 0 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Box>
            <FormController.TextInput<Movie>
              name="title"
              label="Название"
              control={control}
              errorMessage={errors.title?.message}
            />
          </Box>

          <Box>
            <FormController.NumberInput<Movie>
              name="yearOfIssue"
              label="Год выпуска"
              control={control}
              errorMessage={errors.yearOfIssue?.message}
            />
          </Box>

          <Box>
            <FormController.NumberInput<Movie>
              name="rating"
              label="Рейтинг"
              control={control}
              errorMessage={errors.rating?.message}
            />
          </Box>

          <Box>
            <FormController.MultiSelect<Movie>
              name="countryIds"
              label="Страна"
              control={control}
              {...useGetCountriesQuery()}
            />
          </Box>

          <Box>
            <FormController.MultiSelect<Movie>
              name="genreIds"
              label="Жанр"
              control={control}
              {...useGetGenresQuery()}
            />
          </Box>

          <Box>
            <FormController.NumberInput<Movie>
              name="durationMinutes"
              label="Длительность (мин)"
              width={150}
              control={control}
              errorMessage={errors.durationMinutes?.message}
            />
          </Box>

          <Box>
            <FormController.TextInput<Movie>
              name="description"
              label="Описание"
              multiline
              rows={5}
              control={control}
              errorMessage={errors.description?.message}
            />
          </Box>

          <Button type="submit" variant="contained">
            Сохранить
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
