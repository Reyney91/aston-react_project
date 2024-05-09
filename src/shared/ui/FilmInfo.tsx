import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type { TransformedFilm } from '../types';

export const FilmInfo = ({ film }: { film: TransformedFilm }) => {
  return (
    <Flex justify="space-around">
      <Image w="30%" src={film.poster} alt={film.name} />
      <Box ml="3rem">
        <Heading color="main.green">{film.name}</Heading>
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
