import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Genre } from '@types';

export const genreApi = createApi({
  reducerPath: 'genreApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genre[], void>({
      query: () => `genre`,
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
