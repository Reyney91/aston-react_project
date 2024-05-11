import { useFavorites } from '@app/app/hooks';
import { FilmsList, LoadingLayout } from '@app/widgets';
import { ScaleFade, Container, Box, Heading } from '@chakra-ui/react';

const FavoritePage = () => {
  const { favoriteFilms, isLoading } = useFavorites();

  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem" position="relative">
        <Heading color="main.green" pl="1rem">
          Ваше избранное
        </Heading>
        {isLoading ? <LoadingLayout /> : <FilmsList films={favoriteFilms} />}
      </Container>
    </Box>
  );
};

export { FavoritePage as default };
