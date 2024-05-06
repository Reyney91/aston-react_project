import { LikeIcon } from '@app/shared/icons';
import { Box } from '@chakra-ui/react';

export const LikeFilm = () => {
  return (
    <Box _hover={{ opacity: 0.8 }} mx="1rem">
      <LikeIcon />
    </Box>
  );
};
