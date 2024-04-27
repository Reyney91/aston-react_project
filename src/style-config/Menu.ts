import { defineStyleConfig } from '@chakra-ui/react';

export const Menu = defineStyleConfig({
  baseStyle: {
    list: {
      bg: 'secondary.lightLightBlack',
      color: 'main.white',
    },
    item: {
      bg: 'secondary.lightLightBlack',
      _hover: {
        bg: 'secondary.darkDarkGray',
      },
    },
  },
});
