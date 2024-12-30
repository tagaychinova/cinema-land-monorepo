import { unstable_noStore as noStore } from 'next/cache';

import prisma from '@cinema-land-monorepo/db';

export async function GET() {
  noStore();

  const genres = await prisma.genre.findMany();

  return Response.json(genres);
}
