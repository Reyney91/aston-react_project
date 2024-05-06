import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const WillSoonPage = lazy(() => import('@app/pages/WillSoonPage'));
const FilmsPage = lazy(() => import('@app/pages/FilmsPage'));
const ProfilePage = lazy(() => import('@app/pages/ProfilePage'));
const SignInPage = lazy(() => import('@app/pages/SignInPage'));
const SignUpPage = lazy(() => import('@app/pages/SignUpPage'));

export const publicRoutes: RouteObject[] = [
  { path: '/films', element: <FilmsPage /> },
];

export const userRoutes: RouteObject[] = [
  { path: '/profile', element: <ProfilePage /> },
  { path: '/favorites', element: <WillSoonPage /> },
];
export const guestRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
];
