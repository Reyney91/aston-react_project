import { useAppDispatch, useAppSelector } from '@app/app/hooks/reduxHooks';
import { child, get, ref, set } from 'firebase/database';
import { useCallback } from 'react';
import {
  addFavorite,
  removeFavorite,
  setUserFavorites,
} from '../store/favoritesSlice';
import { database } from '../firebase';
import type { TransformedFilm } from '@app/shared/types';

export function useFavorites() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(state => state.favorites.films);
  const isLoading = useAppSelector(state => state.favorites.isLoading);
  const userId = useAppSelector(state => state.auth.user?.uid);
  const dbRef = ref(database);

  const setAllFavorites = useCallback(async () => {
    const films = await get(child(dbRef, `users/${userId}/favorites`));
    dispatch(setUserFavorites(films.val() ?? []));
  }, [dbRef, dispatch, userId]);

  const addToFavorites = useCallback(
    async (film: TransformedFilm) => {
      dispatch(addFavorite(film));
      await set(ref(database, `users/${userId}/favorites`), [
        ...favoriteFilms,
        film,
      ]);
      const films = await get(child(dbRef, `users/${userId}/favorites`));
      dispatch(setUserFavorites(films.val() ?? []));
    },
    [dbRef, dispatch, favoriteFilms, userId],
  );

  const removeFromFavorites = useCallback(
    async (film: TransformedFilm) => {
      dispatch(removeFavorite(film));
      await set(
        ref(database, `users/${userId}/favorites`),
        favoriteFilms.filter(f => f.id !== film.id),
      );
      const films = await get(child(dbRef, `users/${userId}/favorites`));
      dispatch(setUserFavorites(films.val() ?? []));
    },
    [dbRef, dispatch, favoriteFilms, userId],
  );

  return {
    addToFavorites,
    removeFromFavorites,
    setAllFavorites,
    favoriteFilms,
    isLoading,
  };
}
