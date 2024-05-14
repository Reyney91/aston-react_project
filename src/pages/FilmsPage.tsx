import { useGetAllFilmsQuery } from '@app/app/api/apiSlice';
import { useAuth, useFavorites } from '@app/app/hooks';
import { FilmSearch } from '@app/features';
import { FilmsList, LoadingLayout } from '@app/widgets';
import { Box, Container, Heading, ScaleFade } from '@chakra-ui/react';

const FilmsPage = () => {
  const { data, isFetching } = useGetAllFilmsQuery();
  const { isAuth } = useAuth();
  const { isLoading } = useFavorites();

  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem" position="relative">
        <FilmSearch />
        <Heading color="main.green" mt="2rem" pl="1rem">
          Каталог фильмов
        </Heading>
        {isFetching || (isAuth && isLoading) ? (
          <LoadingLayout />
        ) : (
          <FilmsList films={data?.items} />
        )}
      </Container>
    </Box>
  );
};

export { FilmsPage as default };
