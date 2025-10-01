import { Box, Link } from '@mui/material';
import List from './List';
import { movieStore } from '@stores';
import { AddButton } from '@ui';

export default async function Page() {
  const movies = await movieStore.getMovies();

  return (
    <>
      <Box sx={{ ml: 2, mt: 1, mb: 1.5 }}>
        <Link href="/dashboard/movie/create">
          <AddButton />
        </Link>
      </Box>
      <List movies={movies} />
    </>
  );
}
