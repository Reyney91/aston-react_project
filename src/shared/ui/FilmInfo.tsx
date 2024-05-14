import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '@app/app/hooks';
import { LikeFilm } from '@app/features';
import type { TransformedFilm } from '../types';

export const FilmInfo = ({ film }: { film: TransformedFilm }) => {
  const { isAuth } = useAuth();

  return (
    <Flex justify="space-around">
      <Image w="30%" h="100%" src={film.poster} alt={film.name} />
      <Box ml="3rem">
        <Flex align="center">
          <Heading color="main.green">{film.name}</Heading>
          {isAuth && <LikeFilm film={film} />}
        </Flex>
        <Heading size="md" color="secondary.gray">
          О фильме
        </Heading>
        <Flex flexDir="column">
          <Text>Рейтинг: {film.rating}</Text>
          <Text>Дата выхода: {film.year}</Text>
          <Text>Категория: {film.type}</Text>
          <Text>Страна: {film.country}</Text>

          <Button
            as={Link}
            to={film.webUrl}
            width="20rem"
            target="_blank"
            variant="solid"
            mt="1rem"
            px="2rem"
          >
            Подробнее
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
