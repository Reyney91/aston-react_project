import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

export const ExitIcon = (props: IconProps) => (
  <Icon w="2rem" h="2rem" viewBox="0 0 14 14" {...props}>
    <path
      d="M9.5 10.5V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V3.5"
      stroke="currentColor"
    />
    <path d="M6.5 7H13.5" stroke="currentColor" />
    <path d="M11.5 5L13.5 7L11.5 9" stroke="currentColor" />
  </Icon>
);
