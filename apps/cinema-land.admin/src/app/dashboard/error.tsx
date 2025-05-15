'use client';

import { Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Error({ error }: { error: Error }) {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        margin: 2,
        color: theme.palette.error.main,
      })}
    >
      <ErrorOutlineIcon />
      {`Ошибка: ${error?.message}`}
    </Box>
  );
}
