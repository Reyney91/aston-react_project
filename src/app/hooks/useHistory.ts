import { useAppDispatch, useAppSelector } from '@app/app/hooks/reduxHooks';
import { child, get, ref, set } from 'firebase/database';
import { useCallback } from 'react';
import { database } from '../firebase';
import {
  addHistory,
  removeHistory,
  setUserHistory,
} from '../store/historySlice';

export function useHistory() {
  const dispatch = useAppDispatch();
  const history = useAppSelector(state => state.history.history);
  const isLoading = useAppSelector(state => state.history.isLoading);
  const userId = useAppSelector(state => state.auth.user?.uid);
  const dbRef = ref(database);

  const setAllHistory = useCallback(async () => {
    const dbHistory = await get(child(dbRef, `users/${userId}/history`));
    dispatch(setUserHistory(dbHistory.val() ?? []));
  }, [dbRef, dispatch, userId]);

  const addToHistory = useCallback(
    async (search: string) => {
      const searchItem = { id: Date.now(), name: search };
      dispatch(addHistory(searchItem));
      await set(ref(database, `users/${userId}/history`), [
        ...history,
        searchItem,
      ]);
      const dbHistory = await get(child(dbRef, `users/${userId}/history`));

      dispatch(setUserHistory(dbHistory.val() ?? []));
    },

    [dbRef, dispatch, history, userId],
  );

  const removeFromHistory = useCallback(
    async (searchItemId: number) => {
      dispatch(removeHistory(searchItemId));

      await set(
        ref(database, `users/${userId}/history`),
        history.filter(h => h.id !== searchItemId),
      );
      const dbHistory = await get(child(dbRef, `users/${userId}/history`));
      dispatch(setUserHistory(dbHistory.val() ?? []));
    },
    [dbRef, dispatch, history, userId],
  );

  return {
    setAllHistory,
    addToHistory,
    removeFromHistory,
    history,
    isLoading,
  };
}
