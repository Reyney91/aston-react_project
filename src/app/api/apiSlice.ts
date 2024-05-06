import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformFilmData } from '@app/utils/transforms/transform-api-data';
import { BASE_API_URL } from './apiConstants';
import type { ApiResponse, TransformedApiResponse } from '@app/shared/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    headers: {
      'X-API-KEY': import.meta.env.VITE_FILMS_API_KEY,
      'Content-Type': 'application/json',
    },
  }),
  endpoints: builder => ({
    getFilms: builder.query<TransformedApiResponse, void>({
      query: () => ({
        url: '/api/v2.2/films',
      }),
      transformResponse: (response: ApiResponse): TransformedApiResponse => ({
        ...response,
        items: response.items.map(transformFilmData),
      }),
    }),
  }),
});

export const { useGetFilmsQuery } = apiSlice;
