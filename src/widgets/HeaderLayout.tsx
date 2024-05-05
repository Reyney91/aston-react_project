import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const HeaderLayout = () => (
  <>
    <Box as="header" position="fixed" zIndex={3}>
      <Header />
    </Box>

    <Box as="main" h="100vh" pt="7.5rem">
      <Outlet />
    </Box>
  </>
);
