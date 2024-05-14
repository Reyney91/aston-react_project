import { createSelector } from '@reduxjs/toolkit';
import { getUserIsAuth } from './authSelectors';
import type { RootState } from '../store';

export const getFavorites = (state: RootState) => state.favorites;

export const getFavoriteFilms = createSelector(getFavorites, favorites => {
  return favorites.films;
});

export const getFavoriteIsLoading = createSelector(
  [getFavorites, getUserIsAuth],
  (favorites, isAuth) => {
    return isAuth && favorites.isLoading;
  },
);
