import { FilmLink } from '@app/shared/ui';
import { Center, Grid, List, ListItem } from '@chakra-ui/react';
import type { FilmsProps } from '@app/shared/types';

export const FilmsList = ({ films }: FilmsProps) => {
  return films?.length ? (
    <List
      as={Grid}
      gridTemplateColumns="repeat(auto-fill, minmax(15rem,1fr))"
      gap="2rem"
      my="2rem"
    >
      {films.map(film => (
        <ListItem key={film.id}>
          <FilmLink film={film} />
        </ListItem>
      ))}
    </List>
  ) : (
    <Center color="secondary.gray" mt="2rem" fontSize="3rem">
      Ничего не найдено
    </Center>
  );
};
