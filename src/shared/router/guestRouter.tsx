import { createBrowserRouter, Navigate } from 'react-router-dom';
import { SignInPage, WillSoon, SignUpPage } from '@app/pages';
import { HeaderLayout } from '../ui/HeaderLayout';
import type { RouteObject } from 'react-router-dom';

const guestRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { path: '/films', element: <WillSoon /> },
      { path: '/store', element: <WillSoon /> },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },

  { path: '*', element: <Navigate to="/sign-in" /> },
];

export const guestRouter = createBrowserRouter(guestRoutes);
