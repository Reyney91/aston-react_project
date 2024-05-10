import { LikeIcon } from '@app/shared/icons';
import { Box } from '@chakra-ui/react';
import { useFavorites } from '@app/app/hooks/useFavorites';
import type { TransformedFilm } from '@app/shared/types';

export const LikeFilm = ({ film }: { film: TransformedFilm }) => {
  const { addToFavorites, removeFromFavorites, favoriteFilms } = useFavorites();
  const isLike = !!favoriteFilms.find(f => f.id === film.id);

  return (
    <Box
      onClick={() =>
        isLike ? removeFromFavorites(film) : addToFavorites(film)
      }
      _hover={{ opacity: 0.8 }}
      mx="1rem"
    >
      <LikeIcon isLike={isLike} />
    </Box>
  );
};
