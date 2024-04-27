import { defineStyleConfig } from '@chakra-ui/react';

export const Table = defineStyleConfig({
  baseStyle: {
    fontSize: '0.875rem',
    fontWeight: 400,

    td: {
      verticalAlign: 'middle',
    },
    thead: {
      tr: {
        color: 'secondary.gray',
        fontSize: '0.875rem',
      },
    },
    tbody: {
      td: {
        py: '0.6rem',
      },
      tr: {
        fontSize: '0.875rem',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--chakra-transition-easing-ease-out)',
        transitionProperty: 'background-color',
        _hover: {
          bg: 'secondary.lightBlack',
        },
        _active: {
          bg: 'secondary.black',
        },
      },
    },
  },
});
