'use client';

import {
  Box,
  Chip,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useId } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T, any, T>;
  data?: { id: number; name: string }[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
}

export function MultiSelect<T extends FieldValues>({
  name,
  label,
  control,
  data,
  error,
  isLoading,
}: Props<T>) {
  const labelId = useId();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            labelId={labelId}
            multiple
            error={!!error}
            label={label}
            {...field}
            renderValue={(selected: number[]) => (
              <>
                {isLoading && <CircularProgress size={20} />}

                {data && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={data.find((d) => d.id === value)?.name}
                      />
                    ))}
                  </Box>
                )}
              </>
            )}
          >
            {isLoading && (
              <Box sx={{ display: 'flex', gap: 1, m: 2 }}>
                <CircularProgress size={20} />
                Загрузка...
              </Box>
            )}
            {data &&
              data.map((d) => <MenuItem value={d.id}>{d.name}</MenuItem>)}
          </Select>

          {error && (
            <Box sx={{ color: 'error.main' }}>Ошибка получения данных</Box>
          )}
        </FormControl>
      )}
    />
  );
}
