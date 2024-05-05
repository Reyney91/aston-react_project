import { Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps } from '@chakra-ui/react';

type FilmLinkProps = {
  path: string;
  name: string;
  imagePath: string;
  imageAlt: string | undefined;
} & LinkProps;

export const FilmLink = ({
  imagePath,
  path,
  name,
  imageAlt,
  ...props
}: FilmLinkProps) => {
  return (
    <Link as={RouterLink} to={path} {...props} mx="auto">
      <Image
        h="100%"
        src={imagePath}
        alt={imageAlt}
        borderRadius="1rem"
        _hover={{ opacity: 0.8 }}
      />
      <Text mt="0.25rem">{name}</Text>
    </Link>
  );
};
