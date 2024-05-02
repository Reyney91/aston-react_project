import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';
import { theme } from './chakraTheme';
import { guestRouter, userRouter } from './shared/router';
import { useAppSelector } from './app/hooks';
import './App.css';

export const App = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const router = useMemo(() => {
    return isAuth ? userRouter : guestRouter;
  }, [isAuth]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};
