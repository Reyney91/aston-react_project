/* eslint-disable no-console */
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setUserFavorites } from '../favoritesSlice';
import { setUserHistory } from '../historySlice';

export const logUserInfoLoadedMiddleware = createListenerMiddleware();

logUserInfoLoadedMiddleware.startListening({
  actionCreator: setUserFavorites,
  effect: () => {
    console.log('user favorites uploaded');
  },
});

logUserInfoLoadedMiddleware.startListening({
  actionCreator: setUserHistory,
  effect: () => {
    console.log('user history uploaded');
  },
});
