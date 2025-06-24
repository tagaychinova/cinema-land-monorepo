'use client';

import { Box, TextField } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T, any, T>;
  errorMessage?: string;
  width?: number;
  multiline?: boolean;
  rows?: number;
}

export function TextInput<T extends FieldValues>({
  name,
  label,
  control,
  errorMessage,
  width = 800,
  multiline,
  rows,
}: Props<T>) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label={label}
            multiline={multiline}
            rows={rows}
            onBlur={onBlur}
            onChange={(event) => onChange(event.target.value)}
            value={value}
            autoComplete="off"
            sx={() => ({
              width,
            })}
          />
        )}
        name={name}
      />
      <Box sx={{ color: 'error.main' }}>{errorMessage}</Box>
    </>
  );
}
