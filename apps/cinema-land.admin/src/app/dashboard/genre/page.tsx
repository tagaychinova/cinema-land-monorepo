import { List } from './List';
import { genreStore } from '@stores';

export default async function Page() {
  const genres = await genreStore.getGenres();

  return (
    <>
      <List genres={genres} />
    </>
  );
}
