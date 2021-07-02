import { useSelector, useNavigation, useDispatch } from '@app/hooks';
import { Book } from '@interfaces/book';
import { useFocusEffect } from '@react-navigation/core';
import { getBooks, setBookDetail } from '@redux/books/actions';
import React, { useCallback } from 'react';

import LibraryUI from './LibraryUI';

const Library: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { books } = useSelector(state => ({
    books: state.book.books
  }));

  useFocusEffect(
    useCallback(() => {
      // Get books list on focus screen
      dispatch(getBooks());
    }, [dispatch])
  );

  const handlePressBook = useCallback(
    (book: Book) => {
      // Save book selected into store
      dispatch(setBookDetail(book));

      // Navigate to the next screen
      navigation.navigate('bookDetail');
    },
    [navigation, dispatch]
  );

  return <LibraryUI books={books} onPressBook={handlePressBook} />;
};

export default Library;
