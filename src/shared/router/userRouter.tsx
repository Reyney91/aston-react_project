import { ErrorPage, FilmsPage, ProfilePage, WillSoon } from '@app/pages';
import { HeaderLayout } from '@app/widgets';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/films', element: <FilmsPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/favorites', element: <WillSoon /> },
      {
        path: '*',
        element: <Navigate to="/films" />,
      },
    ],
  },
  { path: '*', element: <Navigate to="/films" /> },
];

export const userRouter = createBrowserRouter(userRoutes);
