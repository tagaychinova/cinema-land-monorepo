'use client';

import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Movie } from '@types';
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';

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
  });

  const onSubmit = useCallback(() => {
    console.log(getValues());
  }, [getValues]);

  return (
    <Box sx={{ m: 2, mb: 0 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
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
                  autoComplete="off"
                  sx={() => ({
                    width: 800,
                  })}
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
                  sx={() => ({
                    width: 100,
                  })}
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
                <FormControl fullWidth>
                  <InputLabel id="genre-label">Жанр</InputLabel>
                  <Select
                    labelId="genre-label"
                    multiple
                    label="Жанр"
                    {...field}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <Button type="submit" variant="contained">
            Сохранить
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
