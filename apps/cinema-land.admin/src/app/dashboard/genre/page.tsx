import { Box } from '@mui/material';
import { List } from './List';
import { genreStore } from '@stores';
import { AddButton } from './buttons';

export default async function Page() {
  const genres = await genreStore.getGenres();

  return (
    <>
      <Box sx={{ ml: 2, mt: 1, mb: 1.5 }}>
        <AddButton />
      </Box>
      <List genres={genres} />
    </>
  );
}
