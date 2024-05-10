import { useGetFilmByKeywordQuery } from '@app/app/api/apiSlice';
import { FilmSearch } from '@app/features';
import { FilmsList, LoadingLayout } from '@app/widgets';
import { Box, Container, Heading, ScaleFade } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isFetching } = useGetFilmByKeywordQuery(
    searchParams.get('q') || '',
  );

  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem" position="relative">
        <FilmSearch searchQuery={searchParams.get('q')} />
        <Heading color="main.green" mt="2rem" pl="1rem">
          Результаты поиска
        </Heading>
        {isFetching ? <LoadingLayout /> : <FilmsList films={data?.films} />}
      </Container>
    </Box>
  );
};

export { SearchPage as default };
