import { ViewContainer } from '@app/components';
import { Book } from '@interfaces/book';
import React from 'react';
import { FlatList } from 'react-native';

import BookItem from './components/BookItem';
import styles from './styles';

type Props = {
  books: Book[];
  onPressBook?: (book: Book) => void;
};

const LibraryUI: React.FC<Props> = ({ books, onPressBook }) => {
  const renderItem = React.useCallback(({ item }) => <BookItem book={item} onPress={onPressBook} />, [
    onPressBook
  ]);

  const keyExtractor = React.useCallback((item: Book) => item.id.toString(), []);

  return (
    <ViewContainer withPadding={false}>
      <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} style={styles.list} />
    </ViewContainer>
  );
};

export default React.memo(LibraryUI);
