import { FilmLink } from '@app/shared/ui';
import { Grid, List, ListItem } from '@chakra-ui/react';

import type { TransformedFilm } from '@app/shared/types';
interface FilmListProps {
  films: TransformedFilm[];
}

export const FilmsList = ({ films }: FilmListProps) => {
  return (
    <List
      as={Grid}
      gridTemplateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
      gap="4rem"
      my="2rem"
    >
      {films.map(film => (
        <ListItem key={film.id}>
          <FilmLink
            imagePath={film.previewPoster}
            imageAlt={film.name}
            name={film.name}
            path={`/film/${film.id}`}
          />
        </ListItem>
      ))}
    </List>
  );
};
