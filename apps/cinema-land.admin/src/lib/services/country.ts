import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '@types';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => `country`,
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;
