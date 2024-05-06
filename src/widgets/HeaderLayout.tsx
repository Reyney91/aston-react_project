import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { LoadingLayout } from './LoadingLayout';

export const HeaderLayout = () => (
  <>
    <Box as="header" position="fixed" zIndex={3}>
      <Header />
    </Box>
    <Box as="main" h="100vh" pt="7.5rem">
      <Suspense fallback={<LoadingLayout />}>
        <Outlet />
      </Suspense>
    </Box>
  </>
);
