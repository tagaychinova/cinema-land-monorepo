import { unstable_noStore as noStore } from 'next/cache';

import prisma from '@cinema-land-monorepo/db';

type Params = Promise<{ id: string }>;

export async function GET(request: Request, props: { params: Params }) {
  noStore();

  const params = await props.params;

  const movie = await prisma.movie.findFirst({
    where: { id: params.id },
  });

  return Response.json(movie);
}
