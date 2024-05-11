import { Spinner, VStack } from '@chakra-ui/react';

export const LoadingLayout = () => {
  return (
    <VStack mt={20}>
      <Spinner size="xl" />
    </VStack>
  );
};
