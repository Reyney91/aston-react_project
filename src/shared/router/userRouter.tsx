import { ProfilePage, WillSoon } from '@app/pages';
import { HeaderLayout } from '@app/widgets';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { path: '/films', element: <WillSoon /> },
      { path: '/store', element: <WillSoon /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
  { path: '/favorites', element: <WillSoon /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const userRouter = createBrowserRouter(userRoutes);
