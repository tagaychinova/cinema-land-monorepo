import { unstable_noStore as noStore } from 'next/cache';

import prisma from '../../../lib/prisma';

export async function GET() {
  noStore();

  const movies = await prisma.movie.findMany();

  return Response.json(movies);
}
