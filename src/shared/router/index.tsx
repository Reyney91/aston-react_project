import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '@app/app/hooks';
import { HeaderLayout, LoadingLayout } from '@app/widgets';

import { guestRoutes, publicRoutes, userRoutes } from './routes';

export function Router() {
  const { isAuth } = useAuth();

  return (
    <Suspense fallback={<LoadingLayout />}>
      <Routes>
        <Route element={<HeaderLayout />}>
          {publicRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {isAuth &&
            userRoutes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {!isAuth &&
          guestRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
      </Routes>
    </Suspense>
  );
}
