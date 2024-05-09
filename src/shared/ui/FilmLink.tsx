import { Flex, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LikeFilm } from '@app/features';
import PropTypes from 'prop-types';

// @ts-expect-error Prop types cover these props
export const FilmLink = ({ imagePath, path, name, imageAlt }) => {
  return (
    <>
      <Link as={RouterLink} to={path}>
        <Image
          w="100%"
          h="100%"
          src={imagePath}
          alt={imageAlt}
          borderRadius="1rem"
          mx="auto"
          _hover={{ opacity: 0.8 }}
        />
      </Link>
      <Flex mt="0.25rem" justify="space-between">
        <Link as={RouterLink} to={path}>
          {name}
        </Link>
        <LikeFilm />
      </Flex>
    </>
  );
};
FilmLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};
