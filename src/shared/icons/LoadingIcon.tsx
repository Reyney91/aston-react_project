import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

export const LoadingIcon = (props: IconProps) => (
  <Icon w="2.5rem" h="2.5rem" viewBox="0 0 40 40" margin="auto" {...props}>
    <path
      d="M17.5 9C17.5 4.30558 13.6944 0.5 9 0.5C4.30558 0.5 0.5 4.30558 0.5 9"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 9 9"
        to="360 9 9"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="360 9 9"
        to="0 9 9"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </path>
    <circle cx="9" cy="9" r="1" stroke="currentColor" />
  </Icon>
);
