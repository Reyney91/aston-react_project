import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useFavorites } from '@app/app/hooks';
import { Header } from './Header';
import { LoadingLayout } from './LoadingLayout';

export const HeaderLayout = () => {
  const { setAllFavorites } = useFavorites();
  useEffect(() => {
    setAllFavorites();
    // Зависимости ругаются на то чтобы я добавил getAll внутрь, но тогда запустится вечный цикл
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
};
