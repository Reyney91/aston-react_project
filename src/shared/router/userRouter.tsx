import { WillSoon } from '@app/pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from '../ui/HeaderLayout';
import type { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { path: '/films', element: <WillSoon /> },
      { path: '/store', element: <WillSoon /> },
      { path: '/profile', element: <WillSoon /> },
    ],
  },
  { path: '/favorites', element: <WillSoon /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const userRouter = createBrowserRouter(userRoutes);
