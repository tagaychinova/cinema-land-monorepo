import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        margin: 2,
      }}
    >
      <CircularProgress size={20} />
      Загрузка...
    </Box>
  );
}
