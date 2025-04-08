import { promises as fs } from 'fs';
import prisma from '@cinema-land-monorepo/db';

type Params = Promise<{ id: string }>;

export async function GET(request: Request, props: { params: Params }) {
  /*
  const file = await fs.readFile(
    process.cwd() + '/public/images/poster_lg.jpg',
  );

  const result = await prisma.file.create({
    data: {
      name: 'poster.jpg',
      extension: 'jpg',
      data: new Uint8Array(file),
    },
  });

  return Response.json(`hello ${result.id}`);
  */

  const params = await props.params;

  const id = +params.id;

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="poster.jpg"');
  headers.append('Content-Type', 'image/jpg');

  const file = await prisma.file.findFirst({
    where: { id: 1 },
  });

  return new Response(file?.data, {
    headers,
  });
}
