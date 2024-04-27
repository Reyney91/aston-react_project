import { WillSoon } from '@app/pages';
import { createBrowserRouter } from 'react-router-dom';

export const userRouter = createBrowserRouter([
  { path: '/', Component: WillSoon },
  { path: '/favorites', Component: WillSoon },
  { path: '/films', Component: WillSoon },
  { path: '/store', Component: WillSoon },
]);
