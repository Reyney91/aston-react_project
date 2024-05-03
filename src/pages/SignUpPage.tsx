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
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ClosedEyeIcon, EyeIcon } from '@app/shared/icons';
import SignBg from '@app/shared/images/SignBG.png';
import { Controller, useForm } from 'react-hook-form';
import { auth } from '@app/app/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAppDispatch } from '@app/app/hooks';
import { login } from '@app/app/store/authSlice';
import type { UserAuth } from '@app/shared/types';

const nameErrorMessage = 'Имя не может быть пустым';
const emailErrorMessage = 'Неккоректный email';
const passwordErrorMessage = 'Пароль не может быть пустым';

export const SignUpPage = () => {
  const [togglePassword, setTogglePassword] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: UserAuth) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: data.name });
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }),
      );
      navigate('/');
    } catch {
      setError('root', { message: 'Почта уже используется' });
      setTimeout(
        () => reset(undefined, { keepValues: true, keepDirty: false }),
        3000,
      );
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
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} gap={0}>
          <Heading>Регистрация</Heading>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormControl mt="1rem" isInvalid={!!errors.name} pos="relative">
                {errors.name && (
                  <FormErrorMessage
                    pos="absolute"
                    fontSize="1rem"
                    color="secondary.red"
                    mt="-1rem"
                  >
                    {nameErrorMessage}
                  </FormErrorMessage>
                )}
                <Input
                  mt="0.5rem"
                  variant="solid"
                  placeholder="Имя"
                  type="text"
                  borderColor={errors.name && 'secondary.red'}
                  {...field}
                />
              </FormControl>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern:
                /^(([^\s"(),.:;<>@[\]]+(\.[^\s"(),.:;<>@[\]]+)*)|(".+"))@(([^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,})$/i,
            }}
            render={({ field }) => (
              <FormControl mt="1rem" isInvalid={!!errors.email} pos="relative">
                {errors.email && (
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
                  mt="0.5rem"
                  variant="solid"
                  placeholder="Электронная почта"
                  type="email"
                  borderColor={errors.email && 'secondary.red'}
                  {...field}
                />
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormControl
                mt="1rem"
                isInvalid={!!errors.password}
                pos="relative"
              >
                {errors.password && (
                  <FormErrorMessage pos="absolute" fontSize="1rem" mt="-1rem">
                    {passwordErrorMessage}
                  </FormErrorMessage>
                )}
                <InputGroup mt="0.5rem">
                  <Input
                    variant="solid"
                    placeholder="********"
                    type={togglePassword ? 'password' : 'text'}
                    borderColor={errors.password && 'secondary.red'}
                    {...field}
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
            )}
          />

          <Button
            type="submit"
            variant={errors.root ? 'destructive' : 'solid'}
            width="100%"
            py="1.5rem"
            mt="1rem"
            isLoading={isSubmitting}
          >
            {errors.root?.message || 'Регистрация'}
          </Button>
          <Button as={RouterLink} to="/" width="100%" py="1.5rem" mt="1rem">
            Продолжить как гость
          </Button>

          <Flex mt="2rem" justify="center">
            <Text>Есть аккаунт? </Text>
            <Link pl="0.625rem" as={RouterLink} to="/sign-in">
              Войти
            </Link>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
};
