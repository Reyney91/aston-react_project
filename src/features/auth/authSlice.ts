import { createSlice } from '@reduxjs/toolkit';
import type { User } from 'firebase/auth';
import type { RootState } from '@app/app/store/store';

export interface AuthState {
  isAuth: boolean;
  user: User | null;
}

// Define the initial state using that type
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
  },
});
export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
