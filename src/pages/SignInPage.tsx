import {
  Button,
  Container,
  FormControl,
  Text,
  Link,
  Flex,
  Heading,
  VStack,
  Input,
  InputRightElement,
  InputGroup,
  IconButton,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ClosedEyeIcon, EyeIcon } from '@app/shared/icons';
import SignBg from '@app/shared/images/SignBG.png';
import type { FocusEvent } from 'react';

const emailRegex =
  /^(([^\s"(),.:;<>@[\]]+(\.[^\s"(),.:;<>@[\]]+)*)|(".+"))@(([^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,})$/i;
const emailErrorMessage = 'Неккоректный email';
const passwordErrorMessage = 'Пароль не может быть пустым';

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [togglePassword, setTogglePassword] = useState(true);

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    switch (event.target.type) {
      case 'email': {
        setIsEmailValid(emailRegex.test(email.toLowerCase()));
        break;
      }
      case 'password': {
        setIsPasswordValid(password.length > 0);
        break;
      }
      default:
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      bgImage={SignBg}
      bgSize="cover"
    >
      <Container
        variant="surface"
        w="43rem"
        p="2rem 4rem"
        bg="secondary.lightBlack"
        borderRadius="0.9375rem"
      >
        <VStack as="form" gap={0}>
          <Heading>Вход</Heading>
          <FormControl mt="1rem" isInvalid={!isEmailValid} pos="relative">
            {!isEmailValid && (
              <FormErrorMessage
                pos="absolute"
                fontSize="1rem"
                color="secondary.red"
                mt="-1rem"
              >
                {emailErrorMessage}
              </FormErrorMessage>
            )}
            <Input
              variant="solid"
              placeholder="Электронная почта"
              type="email"
              value={email}
              borderColor={isEmailValid ? undefined : 'secondary.red'}
              onChange={e => setEmail(e.target.value)}
              onBlur={e => onBlur(e)}
              mt="0.5rem"
            />
          </FormControl>
          <FormControl mt="1.5rem" isInvalid={!isPasswordValid} pos="relative">
            {isPasswordValid || (
              <FormErrorMessage pos="absolute" fontSize="1rem" mt="-1rem">
                {passwordErrorMessage}
              </FormErrorMessage>
            )}
            <InputGroup mt="0.5rem">
              <Input
                variant="solid"
                placeholder="********"
                type={togglePassword ? 'password' : 'text'}
                value={password}
                borderColor={isPasswordValid ? undefined : 'secondary.red'}
                onChange={e => setPassword(e.target.value)}
                onBlur={onBlur}
              />
              <InputRightElement h="100%">
                <IconButton
                  mr="1rem"
                  h="100%"
                  variant="unstyled"
                  onClick={() => setTogglePassword(!togglePassword)}
                  aria-label="show password"
                  icon={togglePassword ? <EyeIcon /> : <ClosedEyeIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button p="1.25rem 4rem" mt="1rem" variant="solid">
            Войти
          </Button>
          <Flex mt="2rem" justify="center">
            <Text>Нет аккаунта? </Text>
            <Link pl="0.625rem" as={RouterLink} to="/sign-up">
              Регистрация
            </Link>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
};
