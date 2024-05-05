import { Avatar, Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@app/app/hooks';
import { EnterIcon, ExitIcon, FilmsIcon, StarIcon } from '../shared/icons';
import { HeaderLink } from '../shared/ui';

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth, authUser, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
    navigate('sign-in');
  };

  return (
    <Flex
      pos="fixed"
      minW="100vw"
      bgColor="#1B1A1A"
      justifyContent="space-around"
      h="5.5rem"
    >
      <Box height="100%">
        <HeaderLink path="/films">
          <FilmsIcon />
          <Text pl="1rem">Фильмы</Text>
        </HeaderLink>
      </Box>
      {isAuth ? (
        <List as={Flex} height="100%">
          <HeaderLink
            path="/profile"
            onActiveProps={isActive =>
              isActive ? { color: 'main.green' } : undefined
            }
          >
            <Box>
              <Avatar
                w="3rem"
                h="3rem"
                src={authUser?.photoURL}
                display="block"
              />
            </Box>
            <Text pl="1rem">{authUser?.displayName}</Text>
          </HeaderLink>
          <ListItem ml="1rem">
            <HeaderLink path="/favorites">
              <StarIcon />
              <Text pl="1rem">Избранное</Text>
            </HeaderLink>
          </ListItem>
          <HeaderLink
            border="none"
            onClick={handleLogout}
            path="/sign-in"
            ml="2rem"
          >
            <ExitIcon />
            <Text pl="1rem">Выйти из аккаунта</Text>
          </HeaderLink>
        </List>
      ) : (
        <HeaderLink path="/sign-in" border="none">
          <EnterIcon />
          <Text pl="1rem">Войти в аккаунт</Text>
        </HeaderLink>
      )}
    </Flex>
  );
};
