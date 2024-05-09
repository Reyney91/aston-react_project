import { useGetFilmsQuery } from '@app/app/api/apiSlice';
import { FilmSearch } from '@app/features';
import { FilmsList, LoadingLayout } from '@app/widgets';
import { Box, Container, Heading, ScaleFade } from '@chakra-ui/react';

const FilmsPage = () => {
  const { data, isFetching, isSuccess } = useGetFilmsQuery();

  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem" position="relative">
        <FilmSearch />
        <Heading color="main.green" mt="2rem" pl="1rem">
          Каталог фильмов
        </Heading>
        {isFetching && <LoadingLayout />}
        {isSuccess && <FilmsList films={data.items} />}
      </Container>
    </Box>
  );
};

export { FilmsPage as default };
