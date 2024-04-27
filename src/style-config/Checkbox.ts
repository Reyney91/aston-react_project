import { defineStyleConfig } from '@chakra-ui/react';

export const Checkbox = defineStyleConfig({
  variants: {
    lineThrough: {
      icon: {
        color: 'main.green',
      },
      // @ts-ignore
      container: {
        py: '0.5rem',
        mt: '0.25rem',
        _checked: {
          textDecoration: 'line-through',
          color: 'secondary.gray',
        },
      },
      control: {
        bg: 'secondary.lightLightBlack',
        borderWidth: '0.125rem',
        borderStyle: 'solid',

        _focus: {
          boxShadow: 'none',
        },
        _checked: {
          borderColor: 'main.green',
          bg: 'secondary.lightLightBlack',
          _hover: {
            bg: 'secondary.lightLightBlack',
            borderColor: 'main.white',
            color: 'main.white',
          },
        },
      },
    },
  },
});
