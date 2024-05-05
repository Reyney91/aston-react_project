import { FilmLink } from '@app/shared/ui';
import { Grid, List, ListItem } from '@chakra-ui/react';

const films = [
  {
    kinopoiskId: 5260016,
    imdbId: null,
    nameRu: 'Попкульт',
    nameEn: null,
    nameOriginal: null,
    countries: [
      {
        country: 'Россия',
      },
    ],
    genres: [
      {
        genre: 'документальный',
      },
    ],
    ratingKinopoisk: 9.4,
    ratingImdb: null,
    year: 2022,
    type: 'TV_SERIES',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/5260016.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5260016.jpg',
  },
  {
    kinopoiskId: 1252447,
    imdbId: 'tt9257638',
    nameRu: 'Лорды раздевалки',
    nameEn: null,
    nameOriginal: 'Lords of the Lockerroom',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'спорт',
      },
      {
        genre: 'для взрослых',
      },
    ],
    ratingKinopoisk: 9.4,
    ratingImdb: 9.3,
    year: 1999,
    type: 'VIDEO',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/1252447.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1252447.jpg',
  },
  {
    kinopoiskId: 1201206,
    imdbId: null,
    nameRu: null,
    nameEn: null,
    nameOriginal: 'BTS: Blood Sweat & Tears',
    countries: [
      {
        country: 'Корея Южная',
      },
    ],
    genres: [
      {
        genre: 'музыка',
      },
      {
        genre: 'короткометражка',
      },
    ],
    ratingKinopoisk: 9.4,
    ratingImdb: null,
    year: 2016,
    type: 'VIDEO',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/1201206.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1201206.jpg',
  },
  {
    kinopoiskId: 1399205,
    imdbId: 'tt7866314',
    nameRu: null,
    nameEn: null,
    nameOriginal: 'BTS: Bon Voyage',
    countries: [
      {
        country: 'Корея Южная',
      },
    ],
    genres: [
      {
        genre: 'реальное ТВ',
      },
    ],
    ratingKinopoisk: 9.3,
    ratingImdb: 9.5,
    year: 2016,
    type: 'TV_SHOW',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/1399205.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1399205.jpg',
  },
  {
    kinopoiskId: 1309325,
    imdbId: null,
    nameRu: 'Космос',
    nameEn: null,
    nameOriginal: '',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'документальный',
      },
    ],
    ratingKinopoisk: 9.3,
    ratingImdb: null,
    year: 2019,
    type: 'TV_SERIES',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/1309325.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1309325.jpg',
  },
  {
    kinopoiskId: 952236,
    imdbId: 'tt5223716',
    nameRu: 'Hot Wheels. Мегатрасса',
    nameEn: null,
    nameOriginal: 'Team Hot Wheels: Build the Epic Race',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'мультфильм',
      },
      {
        genre: 'детский',
      },
    ],
    ratingKinopoisk: 9.3,
    ratingImdb: 6,
    year: 2015,
    type: 'FILM',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/952236.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/952236.jpg',
  },
  {
    kinopoiskId: 1072974,
    imdbId: 'tt13535142',
    nameRu: 'Герои Энвелла',
    nameEn: null,
    nameOriginal: null,
    countries: [
      {
        country: 'Россия',
      },
    ],
    genres: [
      {
        genre: 'фантастика',
      },
      {
        genre: 'мультфильм',
      },
      {
        genre: 'детский',
      },
    ],
    ratingKinopoisk: 9.3,
    ratingImdb: null,
    year: 2017,
    type: 'TV_SERIES',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/1072974.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1072974.jpg',
  },
  {
    kinopoiskId: 962472,
    imdbId: 'tt5396486',
    nameRu: 'Hot Wheels. За гранью воображения',
    nameEn: null,
    nameOriginal: 'Team Hot Wheels: The Skills to Thrill',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'мультфильм',
      },
      {
        genre: 'детский',
      },
    ],
    ratingKinopoisk: 9.3,
    ratingImdb: 6.7,
    year: 2015,
    type: 'FILM',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/962472.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/962472.jpg',
  },
  {
    kinopoiskId: 351771,
    imdbId: 'tt0276902',
    nameRu: null,
    nameEn: null,
    nameOriginal: 'Depeche Mode: Devotional',
    countries: [
      {
        country: 'Великобритания',
      },
    ],
    genres: [
      {
        genre: 'музыка',
      },
      {
        genre: 'документальный',
      },
      {
        genre: 'концерт',
      },
    ],
    ratingKinopoisk: 9.2,
    ratingImdb: 9.1,
    year: 1993,
    type: 'VIDEO',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/351771.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/351771.jpg',
  },
];

export const FilmsList = () => {
  return (
    <List
      as={Grid}
      gridTemplateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
      gap="3rem"
      mt="2rem"
    >
      {films.map(film => (
        <ListItem key={film.kinopoiskId}>
          <FilmLink
            imagePath={film.posterUrlPreview}
            imageAlt={film.nameRu || film.nameOriginal || undefined}
            name={film.nameRu || film.nameOriginal || film.nameEn || ''}
            path=""
          />
        </ListItem>
      ))}
    </List>
  );
};
