import type { Film, TransformedFilm } from '@app/shared/types';

export function transformFilmData(film: Film): TransformedFilm {
  const {
    kinopoiskId,
    countries,
    nameRu,
    nameEn,
    nameOriginal,
    ratingKinopoisk,
    genres,
    posterUrlPreview,
    posterUrl,
  } = film;

  return {
    id: kinopoiskId,
    name: nameRu || nameEn || nameOriginal || '',
    country: countries[0].country,
    genre: genres[0].genre,
    rating: ratingKinopoisk,
    previewPoster: posterUrlPreview,
    poster: posterUrl,
  };
}
