import { useGetFilmByIdQuery } from '@app/app/api/apiSlice';
import { FilmInfo } from '@app/shared/ui';
import { LoadingLayout } from '@app/widgets';
import { Box, Center, Container, ScaleFade } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const FilmsDetailPage = () => {
  const { id } = useParams();
  const { data, isFetching, isSuccess } = useGetFilmByIdQuery(id || '');

  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem">
        {isFetching ? (
          <LoadingLayout />
        ) : isSuccess ? (
          <FilmInfo film={data} />
        ) : (
          <Center color="main.green" fontSize="3rem">
            Ничего не найдено
          </Center>
        )}
      </Container>
    </Box>
  );
};

export { FilmsDetailPage as default };
