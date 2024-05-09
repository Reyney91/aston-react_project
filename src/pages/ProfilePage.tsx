import { useAuth } from '@app/app/hooks';
import { ProfileEdit } from '@app/features';
import { EditIcon } from '@app/shared/icons';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ScaleFade,
  useDisclosure,
} from '@chakra-ui/react';

const ProfilePage = () => {
  const { authUser } = useAuth();
  const editProfileDisclosure = useDisclosure();

  return (
    <Box as={ScaleFade} py="2rem" w="fit-content" mx="auto" in>
      <Container variant="surface" px="2rem" position="relative">
        <Heading color="main.green" pl="1rem" pt="1.25rem">
          Мой профиль
        </Heading>

        <Flex px="2rem" pb="1.25rem">
          <Flex flexDir="column">
            <Box px="1.875rem" py="1.25rem">
              <Avatar src={authUser?.photoURL} size="2xl" />
            </Box>
            <Button h="2rem" pr="0.5rem" onClick={editProfileDisclosure.onOpen}>
              Редактировать <EditIcon />
            </Button>
            <ProfileEdit disclosure={editProfileDisclosure} />
          </Flex>
          <List pl="7rem">
            <ListItem>
              <Heading variant="listItemHeading">Имя:</Heading>
              <Text pt="0.5rem" fontSize="1.25rem" wordBreak="break-word">
                {authUser?.displayName}
              </Text>
            </ListItem>
            <ListItem>
              <Heading variant="listItemHeading">Почта:</Heading>
              <Text pt="0.5rem" fontSize="1.25rem" wordBreak="break-word">
                {authUser?.email}
              </Text>
            </ListItem>
          </List>
        </Flex>
      </Container>
    </Box>
  );
};

export { ProfilePage as default };
