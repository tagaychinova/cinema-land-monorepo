'use server';

import { genreStore } from '@stores';
import { Genre, Result, StorageError } from '@types';
import { revalidatePath } from 'next/cache';

export async function addGenre(
  genre: Omit<Genre, 'id'>,
): Promise<Result<Genre>> {
  revalidatePath('/dashboard/genre');

  try {
    const addedGenre = await genreStore.createGenre(genre);

    return {
      success: true,
      payload: addedGenre,
    };
  } catch (e) {
    return {
      success: false,
      error: {
        code: e instanceof StorageError ? e.code : undefined,
        message: e instanceof Error ? e.message : 'Error',
      },
    };
  }
}

export async function editGenre(genre: Genre): Promise<Result<Genre>> {
  revalidatePath('/dashboard/genre');

  try {
    const editedGenre = await genreStore.updateGenre(genre);

    return {
      success: true,
      payload: editedGenre,
    };
  } catch (e) {
    return {
      success: false,
      error: {
        code: e instanceof StorageError ? e.code : undefined,
        message: e instanceof Error ? e.message : 'Error',
      },
    };
  }
}

export async function deleteGenre(id: number) {
  revalidatePath('/dashboard/genre');

  const result = await genreStore.deleteGenre(id);
  return result;
}
