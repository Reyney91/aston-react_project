import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useEffect } from 'react';
import { theme } from './chakraTheme';
import { Router } from './shared/router';
import ErrorPage from './pages/ErrorPage';
import { useFavorites, useAuth } from './app/hooks';

export const App = () => {
  const { setAllFavorites } = useFavorites();

  const { isAuth } = useAuth();
  useEffect(() => {
    isAuth && setAllFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <Router />
        </ErrorBoundary>
      </ChakraProvider>
    </BrowserRouter>
  );
};
