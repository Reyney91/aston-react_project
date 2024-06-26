import {
  Avatar,
  Box,
  Flex,
  Hide,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { useAuth } from '@app/app/hooks';
import {
  EnterIcon,
  ExitIcon,
  FilmsIcon,
  HistoryIcon,
  StarIcon,
} from '../shared/icons';
import { HeaderLink } from '../shared/ui';

export const Header = () => {
  const { isAuth, authUser, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
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
        <HeaderLink path="/">
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
              <Hide below="md">
                <Text pl="1rem">Избранное</Text>
              </Hide>
            </HeaderLink>
          </ListItem>
          <ListItem ml="1rem">
            <HeaderLink path="/history">
              <HistoryIcon />
              <Hide below="md">
                <Text pl="1rem">История поиска</Text>
              </Hide>
            </HeaderLink>
          </ListItem>
          <HeaderLink
            border="none"
            onClick={handleLogout}
            path="/sign-in"
            ml="2rem"
          >
            <ExitIcon />
            <Hide below="md">
              <Text pl="1rem">Выйти из аккаунта</Text>
            </Hide>
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
