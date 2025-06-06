import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../../types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => `movie`,
    }),
    getMovie: builder.query<Movie, string>({
      query: (id: string) => `movie/${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
