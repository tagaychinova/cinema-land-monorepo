'use server';

import { countryStore } from '@stores';
import { Country } from '@types';
import { revalidatePath } from 'next/cache';

export async function addCountry(country: Omit<Country, 'id'>) {
  revalidatePath('/dashboard/country');

  const result = await countryStore.createCountry(country);
  return result;
}

export async function deleteCountry(id: number) {
  revalidatePath('/dashboard/country');

  const result = await countryStore.deleteCountry(id);
  return result;
}
