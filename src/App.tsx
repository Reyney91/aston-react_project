import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { theme } from './chakraTheme';
import { guestRouter } from './shared/router/guest-router';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={guestRouter} />
    </ChakraProvider>
  );
};
