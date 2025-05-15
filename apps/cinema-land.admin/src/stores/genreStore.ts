import prisma from '@cinema-land-monorepo/db';
import { Prisma } from '@prisma/client';
import { Genre, StorageError, ErrorCode } from '@types';

async function getGenres() {
  const dbGenres = await prisma.genre.findMany();

  const genres: Genre[] = dbGenres.map((g) => ({
    id: g.id,
    name: g.name,
  }));

  return genres;
}

async function createGenre(genre: Omit<Genre, 'id'>) {
  try {
    const result = await prisma.genre.create({
      data: {
        name: genre.name,
      },
    });

    return result;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        e.code === 'P2002' &&
        e.meta?.modelName === 'Genre' &&
        Array.isArray(e.meta?.target) &&
        e.meta?.target.indexOf('name') > -1
      ) {
        throw new StorageError(ErrorCode.NotUnique, 'The genre already exists');
      }
    }

    throw e;
  }
}

async function updateGenre(genre: Genre) {
  try {
    const result = await prisma.genre.update({
      where: {
        id: genre.id,
      },
      data: {
        name: genre.name,
      },
    });

    return result;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        e.code === 'P2002' &&
        e.meta?.modelName === 'Genre' &&
        Array.isArray(e.meta?.target) &&
        e.meta?.target.indexOf('name') > -1
      ) {
        throw new StorageError(ErrorCode.NotUnique, 'The genre already exists');
      }
    }

    throw e;
  }
}

async function deleteGenre(id: number) {
  const result = await prisma.genre.delete({
    where: {
      id,
    },
  });

  return result;
}

export const genreStore = Object.freeze({
  getGenres,
  createGenre,
  updateGenre,
  deleteGenre,
});
