import { extendTheme } from '@chakra-ui/react';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Editable,
  Heading,
  Input,
  Link,
  Menu,
  Modal,
  Progress,
  Table,
} from './style-config';

export const theme = extendTheme({
  breakpoints: {
    base: '0px',
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1900px',
  },
  fonts: {
    heading: '"Golos Text", sans-serif',
  },
  styles: {
    global: {
      html: {
        fontSize: { base: '14px', '2xl': '16px' },
      },
      body: {
        fontFamily: '"Golos Text", sans-serif',
        bg: 'secondary.black',
        color: 'main.white',
        fontSize: '1rem',
      },
    },
  },
  components: {
    Button,
    Checkbox,
    Container,
    Divider,
    Editable,
    Heading,
    Input,
    Link,
    Menu,
    Modal,
    Progress,
    Table,
  },
  colors: {
    main: {
      green: '#00D29D',
      white: '#FFFFFF',
      purple: '#763186',
      yellow: '#FDEC19',
      black: '#000000',
    },
    secondary: {
      gray: '#B1B2B3',
      lightGreen: '#04F8BA',
      darkGreen: '#1B896E',
      black: '#111111',
      darkGray: '#333231',
      darkDarkGray: '#333231',
      lightBlack: '#1B1A1A',
      lightLightBlack: '#282626',
      red: '#CD4945',
      darkRed: '#8F3330',
    },
  },
});
