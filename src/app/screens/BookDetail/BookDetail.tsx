import { useDispatch, useNavigation, useSelector } from '@app/hooks';
import { hashTableGenre } from '@constants/hashTables';
import { useFocusEffect } from '@react-navigation/core';
import { clearBookDetail } from '@redux/books/actions';
import React, { useCallback } from 'react';

import BookDetailUI from './BookDetailUI';

const BookDetail: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { book } = useSelector(state => ({
    book: state.book.bookDetail
  }));

  useFocusEffect(
    useCallback(() => {
      if (!book) navigation.goBack();
      return () => {
        dispatch(clearBookDetail());
      };
    }, [navigation, dispatch, book])
  );

  // Prevent when book is not defined into store
  if (!book) return <></>;

  return (
    <BookDetailUI
      title={`${book.title}(${book.year})`}
      author={book.author}
      genre={hashTableGenre[book.genre]}
      imageUrl={book.imageUrl}
    />
  );
};

export default BookDetail;
