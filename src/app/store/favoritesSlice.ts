import { createSlice } from '@reduxjs/toolkit';
import type { TransformedFilm } from '@app/shared/types';

export interface FavoriteState {
  films: TransformedFilm[];
  isLoading: boolean;
}

const initialState: FavoriteState = {
  films: [],
  isLoading: true,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setUserFavorites: (state, action) => {
      state.films = action.payload;
      state.isLoading = false;
    },
    clearFavorites: state => {
      state.films = [];
    },
    addFavorite: (state, action) => {
      state.films?.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.films = state.films?.filter(film => film.id !== action.payload.id);
    },
  },
});

export const { setUserFavorites, clearFavorites, addFavorite, removeFavorite } =
  favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
