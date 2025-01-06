'use server';

import { countryStore } from '@stores';
import { Country, Result, StorageError } from '@types';
import { revalidatePath } from 'next/cache';

export async function addCountry(
  country: Omit<Country, 'id'>
): Promise<Result<Country>> {
  revalidatePath('/dashboard/country');

  try {
    const addedCountry = await countryStore.createCountry(country);

    return {
      success: true,
      payload: addedCountry,
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

export async function editCountry(country: Country): Promise<Result<Country>> {
  revalidatePath('/dashboard/country');

  try {
    const editedCountry = await countryStore.updateCountry(country);

    return {
      success: true,
      payload: editedCountry,
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

export async function deleteCountry(id: number) {
  revalidatePath('/dashboard/country');

  const result = await countryStore.deleteCountry(id);
  return result;
}
