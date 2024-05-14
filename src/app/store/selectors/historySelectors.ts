import { createSelector } from '@reduxjs/toolkit';

import { getUserIsAuth } from './authSelectors';
import type { RootState } from '../store';

export const getHistory = (state: RootState) => state.history;

export const getUserHistory = createSelector(getHistory, history => {
  return history.history;
});

export const getHistoryIsLoading = createSelector(
  [getHistory, getUserIsAuth],
  (history, isAuth) => {
    return isAuth && history.isLoading;
  },
);
