import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HeaderLayout } from '@app/widgets';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const SignInPage = lazy(() => import('@app/pages/SignInPage'));
const WillSoonPage = lazy(() => import('@app/pages/WillSoonPage'));
const SignUpPage = lazy(() => import('@app/pages/SignUpPage'));
const FilmsPage = lazy(() => import('@app/pages/FilmsPage'));
const ErrorPage = lazy(() => import('@app/pages/ErrorPage'));

const guestRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage />, errorElement: <ErrorPage /> },
  { path: '/sign-up', element: <SignUpPage />, errorElement: <ErrorPage /> },
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/films', element: <FilmsPage /> },
      { path: '/store', element: <WillSoonPage /> },
      {
        path: '*',
        element: <Navigate to="/sign-in" />,
      },
    ],
  },

  { path: '*', element: <Navigate to="/sign-in" /> },
];

export const guestRouter = createBrowserRouter(guestRoutes);
