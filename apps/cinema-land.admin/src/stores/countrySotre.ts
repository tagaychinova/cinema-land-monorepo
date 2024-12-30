import prisma from '@cinema-land-monorepo/db';
import { Country } from '@types';

async function getCountries() {
  const dbCountries = await prisma.country.findMany();

  const countries: Country[] = dbCountries.map((c) => ({
    id: c.id,
    name: c.name,
  }));

  return countries;
}

async function createCountry(country: Omit<Country, 'id'>) {
  const result = await prisma.country.create({
    data: {
      name: country.name,
    },
  });

  return result;
}

async function deleteCountry(id: number) {
  const result = await prisma.country.delete({
    where: {
      id,
    },
  });

  return result;
}

export const countryStore = Object.freeze({
  getCountries,
  createCountry,
  deleteCountry,
});
