import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizes: {
    sm: {
      h: '1.5rem',
      px: '0.75rem',
      fontSize: '0.875rem',
    },
    md: {
      px: '0.75rem',
      fontSize: '1rem',
      h: '2rem',
    },
    lg: {
      px: '1.5rem',
      fontSize: '1rem',
      h: '3rem',
    },
  },
  variants: {
    solid: {
      borderRadius: '6px',
      fontWeight: '400',
      bg: 'secondary.lightGreen',
      _hover: {
        bg: 'main.green',
      },
      _active: {
        bg: 'secondary.gray',
      },
    },
    outlined: {
      borderRadius: '6px',
      fontWeight: '400',
      bg: 'none',
      color: 'secondary.gray',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'secondary.gray',
      _hover: {
        bg: 'secondary.darkDarkGray',
      },
      _active: {
        bg: 'main.green',
        color: 'main.black',
        borderColor: 'main.green',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outlined',
  },
});
