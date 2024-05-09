import type { Film, SearchedFilm, TransformedFilm } from '@app/shared/types';

export function transformFilmData(film: Film): TransformedFilm {
  const {
    kinopoiskId,
    countries,
    nameRu,
    nameEn,
    nameOriginal,
    ratingKinopoisk,
    ratingImdb,
    posterUrlPreview,
    posterUrl,
    year,
    type,
    webUrl,
  } = film;

  return {
    id: kinopoiskId,
    name: nameRu || nameEn || nameOriginal || '',
    country: countries[0].country,
    rating: ratingImdb || ratingKinopoisk,
    previewPoster: posterUrlPreview,
    poster: posterUrl,
    year,
    type,
    webUrl,
  };
}

export function transformSearchedFilmData(film: SearchedFilm): TransformedFilm {
  const {
    filmId,
    nameEn,
    nameRu,
    posterUrl,
    posterUrlPreview,
    rating,
    countries,
    year,
    type,
  } = film;

  return {
    id: filmId,
    name: nameRu || nameEn || '',
    country: countries[0]?.country,
    previewPoster: posterUrlPreview,
    poster: posterUrl,
    rating,
    year,
    type,
  };
}
