import { FilmSearch } from '@app/features';
import { FilmsList } from '@app/widgets';
import { Box, Container, Flex, Heading, ScaleFade } from '@chakra-ui/react';

export const FilmsPage = () => {
  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem" position="relative">
        <Flex justify="space-between" align="center">
          <Heading color="main.green" pl="1rem">
            Каталог фильмов
          </Heading>
          <FilmSearch mr="4rem" />
        </Flex>
        <FilmsList />
      </Container>
    </Box>
  );
};
