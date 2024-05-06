import { Button, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <VStack mt="10rem">
      <Heading>Something went wrong</Heading>
      <Button as={Link} to="/">
        Go Home
      </Button>
    </VStack>
  );
};
export { ErrorPage as default };
