import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  IconButton,
  ModalBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import { CloseIcon } from '@app/shared/icons';
import { auth } from '@app/app/firebase';
import { useAppDispatch, useAppSelector } from '@app/app/hooks';
import { update } from '@app/app/store/authSlice';
import type { UseDisclosureReturn } from '@chakra-ui/react';

export type EditProfileProps = {
  disclosure: UseDisclosureReturn;
};

export const ProfileEdit = ({ disclosure }: EditProfileProps) => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    setError,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user?.displayName,
      avatarUrl: user?.photoURL || '',
    },
  });

  const onSubmit = async (data: {
    name: string | undefined;
    avatarUrl: string | undefined;
  }) => {
    try {
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
        disclosure.onClose();
      }
    } catch {
      setError('root', { message: 'Некорректное имя или ссылка' });
      setTimeout(
        () => reset(undefined, { keepValues: true, keepDirty: false }),
        3000,
      );
    }
  };

  return (
    <Modal
      size="2xl"
      isOpen={disclosure.isOpen}
      onClose={disclosure.onClose}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader px="unset" py="unset">
          <Heading variant="modalHeading">Изменяем свои данные</Heading>
        </ModalHeader>
        <IconButton
          aria-label=""
          variant="unstyled"
          pos="absolute"
          right="2rem"
          top="1.5rem"
          w="2.75rem"
          h="2.75rem"
          icon={<CloseIcon />}
          onClick={disclosure.onClose}
        />
        <ModalBody px="unset" py="unset">
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <Flex mt="1.5rem" direction="column" gap="1.25rem">
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <FormControl isInvalid={!!errors.name} pos="relative">
                    <FormLabel pl="1rem">Имя</FormLabel>
                    {errors.name && (
                      <FormErrorMessage
                        pos="absolute"
                        fontSize="1rem"
                        color="secondary.red"
                        mt="-1rem"
                        right={0}
                      >
                        Имя не может быть пустым
                      </FormErrorMessage>
                    )}
                    <Input
                      size="md"
                      mt="0.5rem"
                      borderColor={errors.name && 'secondary.red'}
                      {...field}
                    />
                  </FormControl>
                )}
              />

              <Controller
                name="avatarUrl"
                control={control}
                render={({ field }) => (
                  <FormControl isInvalid={!!errors.avatarUrl}>
                    <FormLabel pl="1rem">Ссылка на фото</FormLabel>
                    <Input
                      size="md"
                      mt="0.5rem"
                      borderColor={errors.avatarUrl && 'secondary.red'}
                      {...field}
                    />
                  </FormControl>
                )}
              />
            </Flex>
            <Flex justify="flex-end" mt="2rem" gap="1.5rem">
              <Button
                size="lg"
                type="submit"
                variant={errors.root ? 'destructive' : 'solid'}
                isLoading={isSubmitting}
              >
                {errors.root?.message || 'Сохранить'}
              </Button>
              <Button size="lg" onClick={disclosure.onClose}>
                Отменить
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
