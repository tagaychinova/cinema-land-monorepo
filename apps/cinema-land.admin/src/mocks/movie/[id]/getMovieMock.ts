import { http, HttpResponse } from 'msw';

const movie = {
  id: 1,
  title: '222',
  genre: 'Фэнтези',
  yearOfIssue: 2001,
};

export const getMovieMock = http.get(
  `${process.env.NEXT_RUNTIME}/api/movie/:id`,
  () => HttpResponse.json(movie)
);