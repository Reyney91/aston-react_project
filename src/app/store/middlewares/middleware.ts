/* eslint-disable no-console */
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { login, logout } from '../authSlice';

export const logUserInfoLoadedMiddleware = createListenerMiddleware();

logUserInfoLoadedMiddleware.startListening({
  actionCreator: login,
  effect: () => {
    console.log('user logged in');
  },
});

logUserInfoLoadedMiddleware.startListening({
  actionCreator: logout,
  effect: () => {
    console.log('user logged out');
  },
});
