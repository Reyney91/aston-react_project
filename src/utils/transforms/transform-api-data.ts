import type { Film, TransformedFilm } from '@app/shared/types';

export function transformFilmData(film: Film): TransformedFilm {
  const {
    kinopoiskId,
    countries,
    nameRu,
    nameEn,
    nameOriginal,
    ratingKinopoisk,
    ratingImdb,
    genres,
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
    genre: genres[0].genre,
    rating: ratingImdb || ratingKinopoisk,
    previewPoster: posterUrlPreview,
    poster: posterUrl,
    year,
    type,
    webUrl,
  };
}
