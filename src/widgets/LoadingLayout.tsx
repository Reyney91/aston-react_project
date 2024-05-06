import { LoadingIcon } from '@app/shared/icons';
import { VStack } from '@chakra-ui/react';

export const LoadingLayout = () => {
  return (
    <VStack mt={20}>
      <LoadingIcon />
    </VStack>
  );
};
