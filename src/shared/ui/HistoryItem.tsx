import { useHistory } from '@app/app/hooks';
import { Button, Flex, Link, ListItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// @ts-expect-error Prop types cover these props
export const HistoryItem = ({ search, id }) => {
  const { removeFromHistory } = useHistory();
  const encodeItemQuery = encodeURIComponent(search);

  return (
    <ListItem
      as={Flex}
      justify="space-between"
      align="center"
      p="1rem 2rem"
      bg="secondary.darkGray"
      rounded="md"
    >
      <Link
        as={RouterLink}
        to={`/search?q=${encodeItemQuery}`}
        color="white"
        fontSize={24}
      >
        {search}
      </Link>

      <Button variant="destructive" onClick={() => removeFromHistory(id)}>
        X
      </Button>
    </ListItem>
  );
};

HistoryItem.propTypes = {
  search: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
