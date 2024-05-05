import { HeaderLayout } from '@app/widgets';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import type { RouteObject } from 'react-router-dom';

const WillSoonPage = lazy(() => import('@app/pages/WillSoonPage'));
const FilmsPage = lazy(() => import('@app/pages/FilmsPage'));
const ErrorPage = lazy(() => import('@app/pages/ErrorPage'));
const ProfilePage = lazy(() => import('@app/pages/ProfilePage'));

const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HeaderLayout />,

    errorElement: <ErrorPage />,
    children: [
      { path: '/films', element: <FilmsPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/favorites', element: <WillSoonPage /> },
      {
        path: '*',
        element: <Navigate to="/films" />,
      },
    ],
  },
  { path: '*', element: <Navigate to="/films" /> },
];

export const userRouter = createBrowserRouter(userRoutes);
