import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const getAuth = (state: RootState) => state.auth;

export const getAuthUser = createSelector(getAuth, auth => {
  return auth.user;
});

export const getUserIsAuth = createSelector(getAuth, auth => {
  return auth.isAuth;
});

export const getUserId = createSelector(
  [getAuthUser, getUserIsAuth],
  (user, isAuth) => {
    return isAuth && user?.uid;
  },
);
