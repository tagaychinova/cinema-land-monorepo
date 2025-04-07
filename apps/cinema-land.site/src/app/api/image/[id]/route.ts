import { promises as fs } from 'fs';

type Params = Promise<{ id: string }>;

export async function GET(request: Request, props: { params: Params }) {
  const params = await props.params;

  const id = params.id;

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="poster.jpg"');
  headers.append('Content-Type', 'image/jpg');

  const file = await fs.readFile(
    process.cwd() + '/public/images/poster_lg.jpg',
  );

  return new Response(file, {
    headers,
  });
}
