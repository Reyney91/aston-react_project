import { Button, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type { FallbackProps } from 'react-error-boundary';

const ErrorPage = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <VStack mt="10rem">
      <Heading>Something went wrong</Heading>
      <Button as={Link} to="/" onClick={resetErrorBoundary}>
        Go Home
      </Button>
    </VStack>
  );
};

export { ErrorPage as default };
