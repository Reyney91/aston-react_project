import { Spinner, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const LoadingLayout = ({ size = 'xl' }) => {
  return (
    <VStack mt={20}>
      <Spinner size={size} />
    </VStack>
  );
};

LoadingLayout.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};
