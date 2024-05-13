import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const FilmsPage = lazy(() => import('@app/pages/FilmsPage'));
const ProfilePage = lazy(() => import('@app/pages/ProfilePage'));
const SignInPage = lazy(() => import('@app/pages/SignInPage'));
const SignUpPage = lazy(() => import('@app/pages/SignUpPage'));
const FilmDetailPage = lazy(() => import('@app/pages/FilmDetailPage'));
const FavoritePage = lazy(() => import('@app/pages/FavoritePage'));
const SearchPage = lazy(() => import('@app/pages/SearchPage'));
const HistoryPage = lazy(() => import('@app/pages/HistoryPage'));

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <FilmsPage /> },
  { path: '/film/:id', element: <FilmDetailPage /> },
  { path: '/search', element: <SearchPage /> },
];

export const userRoutes: RouteObject[] = [
  { path: '/profile', element: <ProfilePage /> },
  { path: '/favorites', element: <FavoritePage /> },
  { path: '/history', element: <HistoryPage /> },
];
export const guestRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
];
