import { auth } from '@app/app/firebase';
import { Button, Heading, VStack } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/app/hooks';
import { logout } from '@app/features/auth/authSlice';
import type { FC } from 'react';

export const WillSoon: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch(logout());
      navigate('/sign-in');
    });
  };
  return (
    <VStack mt="5rem">
      <Heading>Will be soon</Heading>
      {localStorage.getItem('user') ? (
        <Button onClick={handleLogout}>Sign out</Button>
      ) : (
        <Button as={Link} to="/sign-in" variant="solid">
          Sign in
        </Button>
      )}
    </VStack>
  );
};
