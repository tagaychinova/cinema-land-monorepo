import { Box } from '@mui/material';
import List from './List';
import { movieStore } from '@stores';
import { AddButton } from './buttons';

export default async function Page() {
  const movies = await movieStore.getMovies();

  return (
    <>
      <Box sx={{ ml: 2, mt: 1, mb: 1.5 }}>
        <AddButton />
      </Box>
      <List movies={movies} />
    </>
  );
}
