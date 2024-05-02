import { Avatar, Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { auth } from '@app/app/firebase';
import { useAppDispatch, useAppSelector } from '@app/app/hooks';
import { logout } from '@app/features/auth/authSlice';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { EnterIcon, ExitIcon, FilmsIcon, StoreIcon } from '../icons';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const userName = useAppSelector(state => state.auth.user?.displayName);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch(logout());
      navigate('sign-in');
    });
  };

  return (
    <Flex
      pos="fixed"
      minW="100vw"
      zIndex={2}
      bgColor="#1B1A1A"
      justifyContent="space-around"
      h="5.5rem"
    >
      <Box>
        <List as={Flex} height="100%">
          <ListItem height="100%">
            <HeaderLink path="/films">
              <FilmsIcon />
              <Text pl="1rem">Фильмы</Text>
            </HeaderLink>
          </ListItem>
          <ListItem ml="1rem">
            <HeaderLink path="/store">
              <StoreIcon />
              <Text pl="1rem">Магазин</Text>
            </HeaderLink>
          </ListItem>
        </List>
      </Box>
      {isAuth ? (
        <Box as={Flex}>
          <HeaderLink
            path="/profile"
            onActiveProps={isActive =>
              isActive ? { color: 'main.green' } : undefined
            }
          >
            <Box>
              <Avatar w="3rem" h="3rem" src="" display="block" />
            </Box>
            <Text pl="1rem">{userName}</Text>
          </HeaderLink>

          <HeaderLink
            border="none"
            onClick={handleLogout}
            path="/sign-in"
            ml="2rem"
          >
            <ExitIcon />
            <Text pl="1rem">Выйти из аккаунта</Text>
          </HeaderLink>
        </Box>
      ) : (
        <HeaderLink path="/sign-in" border="none">
          <EnterIcon />
          <Text pl="1rem">Войти в аккаунт</Text>
        </HeaderLink>
      )}
    </Flex>
  );
};
