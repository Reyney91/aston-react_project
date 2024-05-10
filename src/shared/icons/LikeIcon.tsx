import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

interface LikeIconProps extends IconProps {
  isLike: boolean;
}

export const LikeIcon = ({ isLike, ...props }: LikeIconProps) => (
  <Icon w="1.375rem" h="1.375rem" viewBox="0 0 14 14" fill="none" {...props}>
    <path
      d="M7.0041 12.3826L1.52973 7.42397C-1.44548 4.44876 2.92807 -1.26363 7.0041 3.35785C11.0801 -1.26363 15.4339 4.4686 12.4785 7.42397L7.0041 12.3826Z"
      stroke={isLike ? 'red' : 'currentColor'}
      fill={isLike ? 'red' : ''}
    />
  </Icon>
);
