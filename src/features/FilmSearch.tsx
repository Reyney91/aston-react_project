import { SearchIcon } from '@app/shared/icons';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { BoxProps } from '@chakra-ui/react';

interface FilmSearchProps extends BoxProps {
  searchQuery?: string | null;
}

export const FilmSearch = ({ searchQuery = '', ...props }: FilmSearchProps) => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: searchQuery || '',
    },
  });
  const onSubmit = async (data: { search: string }) => {
    const encodeSearchQuery = encodeURIComponent(data.search);
    navigate(encodeSearchQuery ? `/search?q=${encodeSearchQuery}` : '/films');
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <InputGroup mt="0.5rem">
            <Input variant="solid" placeholder="Поиск фильмов" {...field} />
            <InputRightElement
              h="100%"
              bgColor="secondary.gray"
              borderRightRadius="0.625rem"
            >
              <IconButton
                type="submit"
                mx="1rem"
                h="100%"
                variant="unstyled"
                aria-label="Search film"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        )}
      />
    </Box>
  );
};
