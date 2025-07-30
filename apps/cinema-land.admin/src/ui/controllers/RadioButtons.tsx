'use client';

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useId } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T, any, T>;
  options: Array<{ value: number; label: string }>;
  row?: boolean;
  errorMessage?: string;
}

export function RadioButtons<T extends FieldValues>({
  name,
  label,
  control,
  options,
  row,
  errorMessage,
}: Props<T>) {
  const labelId = useId();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl sx={{ pl: 1.5 }} fullWidth>
            <FormLabel id={labelId} sx={{ fontSize: 12 }}>
              {label}
            </FormLabel>
            <RadioGroup
              row={row}
              aria-labelledby={labelId}
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={(event) => onChange(+event.target.value)}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
      <Box sx={{ color: 'error.main' }}>{errorMessage}</Box>
    </>
  );
}
