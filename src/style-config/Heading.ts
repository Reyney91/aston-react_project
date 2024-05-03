import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
  },
  sizes: {
    sm: {
      fontSize: '1rem',
      lineHeight: '150%',
    },
    md: {
      fontSize: '1.25rem',
      lineHeight: '150%',
    },
    lg: {
      fontSize: '1.25rem',
      letterSpacing: '0.0375rem',
      lineHeight: '150%',
    },
    xl: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.045rem',
      lineHeight: '150%',
    },
  },
  variants: {
    listItemHeading: {
      fontWeight: 600,
      color: 'secondary.gray',
      pt: '1.25rem',
      fontSize: '1.5rem',
      lineHeight: '150%',
    },
    surfaceHeading: {
      pt: '1.25rem',
      pl: '2rem',
      color: 'main.green',
    },
    modalHeading: {
      color: 'secondary.gray',
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '150%',
      letterSpacing: '0.045rem',
    },
  },
  defaultProps: {
    size: 'xl',
  },
});
