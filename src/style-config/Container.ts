import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  variants: {
    surface: {
      bg: 'secondary.lightBlack',
      borderRadius: '0.9375rem',
      px: 0,
      py: 0,
      mx: 0,
      my: 0,
      maxW: 'none',
    },
  },
});
