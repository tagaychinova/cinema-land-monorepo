'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Movie, MovieType } from '@types';
import { Box, Button, Grid, Stack } from '@mui/material';
import { useGetCountriesQuery, useGetGenresQuery } from '@lib/services';
import { FormController } from '@ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { movieFormSchema } from '@validation';
import Cover from './Cover';

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
      <Grid container spacing={4}>
        <Box>
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
                <FormController.RadioButtons<Movie>
                  name="movieType"
                  label="Тип"
                  control={control}
                  options={[
                    { value: MovieType.Film, label: 'Фильм' },
                    { value: MovieType.Cartoon, label: 'Мультфильм' },
                    { value: MovieType.Series, label: 'Сериал' },
                  ]}
                  row
                  errorMessage={errors.movieType?.message}
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
                <FormController.RadioButtons<Movie>
                  name="ageRating"
                  label="Возрастной рейтинг"
                  control={control}
                  options={[
                    { value: 0, label: '0+' },
                    { value: 6, label: '6+' },
                    { value: 12, label: '12+' },
                    { value: 16, label: '16+' },
                    { value: 18, label: '18+' },
                  ]}
                  row
                  errorMessage={errors.movieType?.message}
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
            </Stack>
          </form>
        </Box>

        <Box>
          <Cover />
        </Box>
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Сохранить
      </Button>
    </Box>
  );
}
