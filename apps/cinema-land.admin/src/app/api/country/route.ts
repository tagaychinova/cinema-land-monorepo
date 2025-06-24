import { unstable_noStore as noStore } from 'next/cache';

import prisma from '@cinema-land-monorepo/db';

export async function GET() {
  noStore();

  const countries = await prisma.country.findMany();

  return Response.json(countries);
}
