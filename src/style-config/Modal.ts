import { defineStyleConfig } from '@chakra-ui/react';

export const Modal = defineStyleConfig({
  baseStyle: {
    overlay: {
      bg: 'blackAlpha.800',
    },
    dialog: {
      bg: 'secondary.lightBlack',
      borderRadius: '0.9375rem',
      px: '2rem',
      paddingTop: '1.5rem',
      paddingBottom: '2rem',
    },

    header: {
      px: 'unset',
      py: 'unset',
    },
    body: {
      px: 'unset',
      py: 'unset',
    },
    footer: {
      px: 'unset',
      py: 'unset',
    },
  },
  sizes: {
    lg: {
      dialog: {
        w: '43.75rem',
      },
    },
  },
});
