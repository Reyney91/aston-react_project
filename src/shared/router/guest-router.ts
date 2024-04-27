import { createBrowserRouter } from 'react-router-dom';
import { SignInPage, WillSoon } from '@app/pages';

export const guestRouter = createBrowserRouter([
  { path: '/sign-in', Component: SignInPage },
  { path: '/sign-up', Component: WillSoon },
  { path: '/', Component: SignInPage },
  { path: '/films', Component: WillSoon },
  { path: '/store', Component: WillSoon },
]);
