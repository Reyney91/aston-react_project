import { LoadingIcon, SearchIcon } from '@app/shared/icons';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import type { BoxProps } from '@chakra-ui/react';

export const FilmSearch = ({ ...props }: BoxProps) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      search: '',
    },
  });
  const onSubmit = async (data: { search: string }) => {
    // try {
    //   console.log(data.search);
    // } catch (error) {
    //   console.log(error);
    // } Будет переделано
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <InputGroup mt="0.5rem">
            <Input variant="solid" placeholder="Поиск фильмов" {...field} />
            <InputRightElement h="100%">
              <IconButton
                type="submit"
                mr="1rem"
                h="100%"
                variant="unstyled"
                aria-label="Search film"
                icon={isSubmitting ? <LoadingIcon /> : <SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        )}
      />
    </Box>
  );
};
