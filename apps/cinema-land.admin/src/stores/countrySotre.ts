import prisma from '@cinema-land-monorepo/db';
import { Prisma } from '@prisma/client';
import { Country, StorageError, ErrorCode } from '@types';

async function getCountries() {
  const dbCountries = await prisma.country.findMany();

  const countries: Country[] = dbCountries.map((c) => ({
    id: c.id,
    name: c.name,
  }));

  return countries;
}

async function createCountry(country: Omit<Country, 'id'>) {
  try {
    const result = await prisma.country.create({
      data: {
        name: country.name,
      },
    });

    return result;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        e.code === 'P2002' &&
        e.meta?.modelName === 'Country' &&
        Array.isArray(e.meta?.target) &&
        e.meta?.target.indexOf('name') > -1
      ) {
        throw new StorageError(
          ErrorCode.NotUnique,
          'The country already exists'
        );
      }
    }

    throw e;
  }
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
