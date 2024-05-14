import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@app/app/store/store';

interface User {
  displayName: string;
  photoURL: string;
  email: string;
  uid: number;
}

export interface AuthState {
  isAuth: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuth: !!localStorage.getItem('user'),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: state => {
      state.user = null;
      state.isAuth = false;
    },
    update: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, update } = authSlice.actions;
export const isAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
