import { Icon, type IconProps } from '@chakra-ui/react';

export const HistoryIcon = (props: IconProps) => (
  <Icon w="2rem" h="2rem" viewBox="0 0 14 14" {...props}>
    <path
      d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z"
      stroke="currentColor"
    />
    <path d="M7 0.5V7L11.6 11.6" stroke="currentColor" />
  </Icon>
);
