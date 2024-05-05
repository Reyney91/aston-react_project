import { auth } from '@app/app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '@app/app/hooks/hooks';
import { login, logout, update } from '@app/app/store/authSlice';
import type { UserAuth } from '@app/shared/types';

export function useAuth() {
  const dispatch = useAppDispatch();
  const stateAuth = useAppSelector(state => state.auth);
  const authUser = stateAuth.user;
  const isAuth = stateAuth.isAuth;
  const signUp = async (data: UserAuth) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = userCredential.user;
    data.name && (await updateProfile(user, { displayName: data.name }));
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(
      login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      }),
    );
  };
  const signIn = async (data: UserAuth) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = userCredential.user;
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(
      login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      }),
    );
  };
  const logOut = async () => {
    localStorage.clear();
    dispatch(logout());
    await signOut(auth);
  };
  const updateAuthUser = async (data: {
    name: string | undefined;
    avatarUrl: string | undefined;
  }) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.avatarUrl,
      });
      localStorage.setItem('user', JSON.stringify(auth.currentUser));
      dispatch(
        update({
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL || '',
        }),
      );
    }
  };

  return { signUp, signIn, logOut, updateAuthUser, isAuth, authUser };
}