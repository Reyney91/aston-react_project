import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformFilmData } from '@app/utils/transforms/transform-api-data';
import { BASE_API_URL } from './apiConstants';
import type {
  ApiResponse,
  Film,
  TransformedApiResponse,
  TransformedFilm,
} from '@app/shared/types';

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
    getFilmById: builder.query<TransformedFilm, string | undefined>({
      query: id => ({
        url: `/api/v2.2/films/${id}`,
      }),
      transformResponse: (response: Film): TransformedFilm =>
        transformFilmData(response),
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = apiSlice;
