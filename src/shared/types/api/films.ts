interface Genre {
  genre: string;
}
interface Country {
  country: string;
}

export interface Film {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: string;
  ratingImdb: string | null;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  webUrl?: string;
}

export interface TransformedFilm {
  id: number;
  name: string;
  country: string;
  rating: string;
  previewPoster: string;
  poster: string;
  year: string;
  type: string;
  webUrl?: string;
}

export interface Pagination {
  total: number;
  totalPages: number;
}

export interface ApiResponse {
  pagination: Pagination;
  items: Film[];
}

export interface TransformedApiResponse {
  pagination: Pagination;
  items: TransformedFilm[];
}

export interface SearchQuery {
  search?: string;
}

export interface SearchApiResponse {
  keyword: string;
  films: SearchedFilm[];
}

export interface SearchedFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface TransformedSearchApiResponse {
  keyword: string;
  films: TransformedFilm[];
}
