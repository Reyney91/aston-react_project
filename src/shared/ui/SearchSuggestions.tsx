import { useGetFilmByKeywordQuery } from '@app/app/api/apiSlice';
import { LoadingLayout } from '@app/widgets';
import { Heading, Link, Image, Center, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// @ts-expect-error Prop types cover these props
export const SearchSuggestions = ({ debouncedValue, isSuggestionsOpen }) => {
  const { data, isFetching } = useGetFilmByKeywordQuery(debouncedValue);

  return (
    isSuggestionsOpen && (
      <Flex
        w="100%"
        maxH="30rem"
        overflowY="auto"
        flexDir="column"
        px="3rem"
        position="absolute"
        bgColor="secondary.darkDarkGray"
        borderRadius="0.625rem"
      >
        {isFetching ? (
          <LoadingLayout />
        ) : data?.films.length ? (
          data.films.map(film => (
            <Link
              as={RouterLink}
              key={film.id}
              to={`/film/${film.id}`}
              py="0.5rem"
            >
              <Flex
                align="center"
                _hover={{ bgColor: 'secondary.lightLightBlack' }}
              >
                <Image
                  src={film.previewPoster}
                  maxW="5rem"
                  borderRadius="0.5rem"
                />
                <Heading size="md" ml="2rem">
                  {film.name}
                </Heading>
              </Flex>
            </Link>
          ))
        ) : (
          <Center color="secondary.gray" my="2rem" fontSize="3rem">
            Ничего не найдено
          </Center>
        )}
      </Flex>
    )
  );
};

SearchSuggestions.propTypes = {
  debouncedValue: PropTypes.string.isRequired,
  isSuggestionsOpen: PropTypes.bool.isRequired,
};
