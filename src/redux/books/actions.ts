import { Book, ID } from '@interfaces/book';
import { ReduxThunk } from '@interfaces/redux';
import BookService from '@services/BookService';

import { Actions, ActionType } from './types';

export const setBooks = (payload: Book[]): Actions => ({
  type: ActionType.BOOKS,
  payload
});

export const setBookDetail = (payload: Book): Actions => ({
  type: ActionType.BOOK_DETAIL,
  payload
});

export const clearBookDetail = (): Actions => ({
  type: ActionType.CLEAR_BOOK_DETAIL
});

export const getBooks = (): ReduxThunk<void> => async dispatch => {
  try {
    const { ok, data } = await BookService.getBooks();
    if (ok && data) dispatch(setBooks(data));
  } catch (error) {
    // TODO: error handler
  }
};

export const getBookDetail = (id: ID): ReduxThunk<void> => async dispatch => {
  try {
    const { ok, data } = await BookService.getBookByID(id);
    if (ok && data) dispatch(setBookDetail(data));
  } catch (error) {
    // TODO: error handler
  }
};
