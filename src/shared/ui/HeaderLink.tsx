import { Link } from '@chakra-ui/react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import type { LinkProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type HeaderLinkProps = {
  path: string;
  children: ReactNode;
  onActiveProps?: (isActive: boolean) => LinkProps | undefined;
} & LinkProps;

export const HeaderLink = ({
  children,
  path,
  onActiveProps,
  ...rest
}: HeaderLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(path);
  const activeProps = onActiveProps ? onActiveProps(isActive) : undefined;
  const styles = isActive
    ? { color: 'main.white' }
    : { color: 'secondary.gray' };

  return (
    <Link
      as={RouterLink}
      to={path}
      textDecoration="none"
      userSelect="none"
      fontWeight="400"
      fontSize="1.125rem"
      fill="none"
      display="flex"
      alignItems="center"
      px="0.5rem"
      py="1rem"
      height="100%"
      _hover={{ textDecoration: 'none', bg: 'secondary.lightLightBlack' }}
      {...styles}
      {...rest}
      {...activeProps}
    >
      {children}
    </Link>
  );
};
