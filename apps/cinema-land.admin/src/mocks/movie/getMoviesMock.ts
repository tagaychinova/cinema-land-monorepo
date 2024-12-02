import { http, HttpResponse } from 'msw';

const movies = [
  {
    id: 1,
    title: '222',
    genre: 'Фэнтези',
    yearOfIssue: 2001,
  },
  { id: 2, title: '333', genre: 'Cersei', yearOfIssue: 42 },
  { id: 3, title: 'Lannister', genre: 'Jaime', yearOfIssue: 45 },
  { id: 4, title: 'Stark', genre: 'Arya', yearOfIssue: 16 },
  { id: 5, title: 'Targaryen', genre: 'Daenerys', yearOfIssue: null },
  { id: 6, title: 'Melisandre', genre: null, yearOfIssue: 150 },
  { id: 7, title: 'Clifford', genre: 'Ferrara', yearOfIssue: 44 },
  { id: 8, title: 'Frances', genre: 'Rossini', yearOfIssue: 36 },
  { id: 9, title: 'Roxie', genre: 'Harvey', yearOfIssue: 65 },
];

export const getMoviesMock = http.get(
  `${process.env.NEXT_RUNTIME}/api/movie`,
  () => HttpResponse.json(movies)
);
