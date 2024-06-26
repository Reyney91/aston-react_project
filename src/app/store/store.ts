import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { authReducer } from './authSlice';
import { favoriteReducer } from './favoritesSlice';
import { historyReducer } from './historySlice';
import { logUserInfoLoadedMiddleware } from './middlewares/middleware';

const reducers = combineReducers({
  auth: authReducer,
  favorites: favoriteReducer,
  history: historyReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      logUserInfoLoadedMiddleware.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
