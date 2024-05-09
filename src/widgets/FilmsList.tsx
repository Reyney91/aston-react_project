import { FilmLink } from '@app/shared/ui';
import { Center, Grid, List, ListItem } from '@chakra-ui/react';

import type { TransformedFilm } from '@app/shared/types';
interface FilmListProps {
  films: TransformedFilm[];
}

export const FilmsList = ({ films }: FilmListProps) => {
  return (
    <List
      as={Grid}
      gridTemplateColumns="repeat(auto-fit, minmax(15rem,1fr))"
      gap="2rem"
      my="2rem"
    >
      {films.length ? (
        films.map(film => (
          <ListItem key={film.id}>
            <FilmLink
              imagePath={film.previewPoster}
              imageAlt={film.name}
              name={film.name}
              path={`/film/${film.id}`}
            />
          </ListItem>
        ))
      ) : (
        <Center color="secondary.gray" mt="2rem" fontSize="3rem">
          Совпадений не найдено
        </Center>
      )}
    </List>
  );
};
