import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

export const CloseIcon = (props: IconProps) => (
  <Icon w="1.375rem" h="1.375rem" viewBox="0 0 15 20" fill="none" {...props}>
    <path
      d="M13.5 0.5L0.5 13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.5 0.5L13.5 13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
