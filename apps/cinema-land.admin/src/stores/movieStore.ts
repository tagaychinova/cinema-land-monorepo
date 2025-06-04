import prisma from '@cinema-land-monorepo/db';
import { Movie } from '@types';

async function getMovies() {
  const dbMovies = await prisma.movie.findMany();

  const movies: Movie[] = dbMovies.map((m) => ({
    id: m.id,
    title: m.title,
    genre: m.genres,
    yearOfIssue: m.yearOfIssue,
  }));

  return movies;
}

async function getMovie(id: string) {
  const movie = await prisma.movie.findFirst({
    where: { id },
  });

  return movie;
}

export const movieStore = Object.freeze({
  getMovies,
  getMovie,
});
