import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LikeFilm } from '@app/features';
import { useAuth } from '@app/app/hooks';
import type { TransformedFilm } from '../types';

export const FilmLink = ({ film }: { film: TransformedFilm }) => {
  const { isAuth } = useAuth();

  return (
    <Box h="100%" maxW="20rem">
      <Link as={RouterLink} to={`/film/${film.id}`}>
        <Image
          w="100%"
          h="90%"
          src={film.previewPoster}
          alt={film.name}
          borderRadius="1rem"
          mx="auto"
          _hover={{ opacity: 0.8 }}
        />
      </Link>
      <Flex mt="0.5rem" justify="space-between">
        <Link as={RouterLink} to={`/film/${film.id}`} ml="1rem">
          {film.name}
        </Link>
        {isAuth && <LikeFilm film={film} />}
      </Flex>
    </Box>
  );
};
