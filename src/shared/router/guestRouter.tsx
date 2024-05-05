import { createBrowserRouter, Navigate } from 'react-router-dom';
import { SignInPage, WillSoon, SignUpPage, FilmsPage } from '@app/pages';
import { HeaderLayout } from '@app/widgets';
import type { RouteObject } from 'react-router-dom';

const guestRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { path: '/films', element: <FilmsPage /> },
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
