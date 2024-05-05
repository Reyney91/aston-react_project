import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  SignInPage,
  WillSoon,
  SignUpPage,
  FilmsPage,
  ErrorPage,
} from '@app/pages';
import { HeaderLayout } from '@app/widgets';
import type { RouteObject } from 'react-router-dom';

const guestRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage />, errorElement: <ErrorPage /> },
  { path: '/sign-up', element: <SignUpPage />, errorElement: <ErrorPage /> },
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/films', element: <FilmsPage /> },
      { path: '/store', element: <WillSoon /> },
      {
        path: '*',
        element: <Navigate to="/sign-in" />,
      },
    ],
  },

  { path: '*', element: <Navigate to="/sign-in" /> },
];

export const guestRouter = createBrowserRouter(guestRoutes);
