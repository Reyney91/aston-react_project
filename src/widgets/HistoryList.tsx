import { HistoryItem } from '@app/shared/ui';
import { Center, List, ListItem } from '@chakra-ui/react';
import type { HistoryItemType } from '@app/shared/types';
interface HistoryListProps {
  searchList: HistoryItemType[];
}

export const HistoryList = ({ searchList }: HistoryListProps) => {
  return searchList?.length ? (
    <List my="2rem" px="1rem">
      {searchList.map(({ id, name }) => (
        <ListItem mt="1rem" key={id}>
          <HistoryItem id={id} search={name} />
        </ListItem>
      ))}
    </List>
  ) : (
    <Center color="secondary.gray" mt="2rem" fontSize="3rem">
      Ничего не найдено
    </Center>
  );
};
