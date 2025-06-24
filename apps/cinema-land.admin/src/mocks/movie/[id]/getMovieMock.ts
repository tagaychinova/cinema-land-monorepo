import { http, HttpResponse } from 'msw';
import { Movie } from '../../../types';

const movie: Movie = {
  id: '1',
  title: '222',
  countryIds: [],
  genreIds: [],
  yearOfIssue: 2001,
  rating: 5,
  description: '',
  durationMinutes: 90,
};

export const getMovieMock = http.get(
  `${process.env.NEXT_RUNTIME}/api/movie/:id`,
  () => HttpResponse.json(movie),
);
