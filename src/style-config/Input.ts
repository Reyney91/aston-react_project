import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    solid: {
      field: {
        bg: 'secondary.lightLightBlack',
        borderRadius: '0.625rem',
        borderWidth: '0.125rem',
        borderStyle: 'solid',
        borderColor: 'secondary.lightLightBlack',
        px: '1rem',
        _placeholder: {
          color: 'secondary.gray',
        },
        _hover: {
          bg: 'secondary.darkDarkGray',
          borderColor: 'secondary.darkDarkGray',
        },
        _focus: {
          bg: 'secondary.darkDarkGray',
          borderColor: 'secondary.darkDarkGray',
          boxShadow: 'none',
        },
      },
    },
  },
  sizes: {
    lg: {
      field: {
        h: '3.75rem',
        fontSize: '1.125rem',
        _placeholder: {
          fontSize: '1.125rem',
        },
      },
    },
    md: {
      field: {
        h: '3rem',
        fontSize: '1rem',
        _placeholder: {
          fontSize: '1rem',
        },
      },
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'solid',
  },
});
