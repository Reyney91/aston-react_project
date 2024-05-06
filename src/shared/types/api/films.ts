interface Genres {
  genre: string;
}

export interface Film {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: [
    {
      country: string;
    },
  ];
  genres: Genres[];
  ratingKinopoisk: number;
  ratingImdb: number | null;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface TransformedFilm {
  id: number;
  name: string;
  country: string;
  genre: string;
  rating: number;
  previewPoster: string;
  poster: string;
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

export interface SingleApiResponse {
  data: Film;
}
