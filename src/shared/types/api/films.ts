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
  ratingKinopoisk: number;
  ratingImdb: number | null;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  webUrl?: string;
}

export interface TransformedFilm {
  id: number;
  name: string;
  country: string;
  genre: string;
  rating: number;
  previewPoster: string;
  poster: string;
  year: number;
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
