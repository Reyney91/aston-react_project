import { WillSoon } from '@app/pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
  { path: '/', element: <WillSoon /> },
  { path: '/films', element: <WillSoon /> },
  { path: '/store', element: <WillSoon /> },
  { path: '/favorites', element: <WillSoon /> },
  { path: '*', element: <Navigate to="/" /> },
];
export const userRouter = createBrowserRouter(userRoutes);
