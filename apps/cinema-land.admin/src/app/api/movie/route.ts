import { unstable_noStore as noStore } from 'next/cache';

import prisma from '@cinema-land-monorepo/db';

export async function GET() {
  noStore();

  const movies = await prisma.movie.findMany();

  return Response.json(movies);
}
