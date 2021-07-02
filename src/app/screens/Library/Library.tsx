import { useSelector } from '@app/hooks/redux';
import React from 'react';

import LibraryUI from './LibraryUI';

const Library: React.FC = () => {
  const { books } = useSelector(state => ({
    books: state.book.books
  }));

  const handlePressBook = React.useCallback(() => {
    // TODO
  }, []);

  return <LibraryUI books={books} onPressBook={handlePressBook} />;
};

export default Library;
