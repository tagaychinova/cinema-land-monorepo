export async function GET(request: Request, params: { id: string }) {
  const { id } = params;

  const movie = {
    id,
    title: '5Гарри Поттер и философский камень',
    genre: 'Фэнтези',
    yearOfIssue: 2001,
  };

  return Response.json(movie);
}
