import { unstable_noStore as noStore } from 'next/cache';

import prisma from '../../../../lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  noStore();

  const movie = await prisma.movie.findFirst({
    where: { id: params.id },
  });

  return Response.json(movie);
}
