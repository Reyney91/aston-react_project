import { createSlice } from '@reduxjs/toolkit';
import type { HistoryItemType } from '@app/shared/types';

export interface HistoryState {
  history: HistoryItemType[];
  isLoading: boolean;
}

const initialState: HistoryState = {
  history: [],
  isLoading: true,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setUserHistory: (state, action) => {
      state.history = action.payload;
      state.isLoading = false;
    },
    clearHistory: state => {
      state.history = [];
    },
    addHistory: (state, action) => {
      state.history?.push(action.payload);
    },
    removeHistory: (state, action) => {
      state.history = state.history?.filter(
        history => history.id !== action.payload,
      );
    },
  },
});

export const { addHistory, clearHistory, removeHistory, setUserHistory } =
  historySlice.actions;
export const historyReducer = historySlice.reducer;
