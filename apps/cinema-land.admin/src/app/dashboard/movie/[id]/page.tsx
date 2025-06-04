import { movieStore } from '@stores';
import Form from './Form';

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const movie = await movieStore.getMovie(id);

  if (!movie) {
    return <>Movie is not found</>;
  }

  const data = {
    ...movie,
    genre: [],
    coverFileId: movie?.coverFileId || undefined,
  };

  return <Form movie={data} />;
}
