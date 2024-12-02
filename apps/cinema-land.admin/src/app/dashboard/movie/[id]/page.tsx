'use client';
import * as React from 'react';
import { useGetMovieQuery } from '../../../../lib/services/movie';
import { Controller, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Button, MenuItem, Select, TextField } from '@mui/material';

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  const { data, error, isLoading } = useGetMovieQuery(id);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    values: data,
  });

  const onSubmit = useCallback(() => {
    console.log(getValues());
  }, [getValues]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              label="Название"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="title"
        />
      </div>
      <div className="error-message">{(errors as any).title?.message}</div>
      <div>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              label="Год выпуска"
              type="number"
              onBlur={onBlur}
              onChange={(event) => onChange(+event.target.value)}
              value={value}
            />
          )}
          name="yearOfIssue"
        />
      </div>
      <div className="error-message">
        {(errors as any).yearOfIssue?.message}
      </div>
      <div>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select label="Жанр" {...field}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
        />
      </div>
      <Button type="submit" variant="contained">
        Сохранить
      </Button>
    </form>
  );
}
