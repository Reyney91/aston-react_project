import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { theme } from './chakraTheme';
import { Router } from './shared/router';
import ErrorPage from './pages/ErrorPage';

export const App = () => {
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
