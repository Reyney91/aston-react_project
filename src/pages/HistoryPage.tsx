import { useHistory } from '@app/app/hooks';
import { HistoryList, LoadingLayout } from '@app/widgets';
import { ScaleFade, Container, Box, Heading } from '@chakra-ui/react';

const HistoryPage = () => {
  const { history, isLoading } = useHistory();

  return (
    <Box as={ScaleFade} py="2rem" mx="3rem" in>
      <Container zIndex={0} variant="surface" p="2rem 2rem" position="relative">
        <Heading color="main.green" pl="1rem">
          Ваша история поиска
        </Heading>
        {isLoading ? (
          <LoadingLayout size="lg" />
        ) : (
          <HistoryList searchList={history} />
        )}
      </Container>
    </Box>
  );
};

export { HistoryPage as default };
