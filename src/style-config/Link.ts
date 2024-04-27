import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  baseStyle: {
    color: 'secondary.lightGreen',
    textDecoration: 'underline',
    _hover: {
      color: 'main.green',
    },
    _active: {
      color: 'secondary.gray',
    },
  },
});
