import { ScrollContainer } from '@app/components';
import { Book, ID } from '@interfaces/book';
import React from 'react';

import BookItem from './components/BookItem';

type Props = {
  books: Book[];
  onPressBook?: (id: ID) => void;
};

const LibraryUI: React.FC<Props> = ({ books, onPressBook }) => {
  return (
    <ScrollContainer>
      <>
        {books.map(book => (
          <BookItem key={book.id} book={book} onPress={onPressBook} />
        ))}
      </>
    </ScrollContainer>
  );
};

export default React.memo(LibraryUI);
