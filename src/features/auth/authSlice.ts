import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@app/app/store/store';

export interface CounterState {
  value: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: !!localStorage.getItem('user'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});
export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
