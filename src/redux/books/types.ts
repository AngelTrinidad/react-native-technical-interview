import { Book } from '@interfaces/book';
import { ReduxAction, ReduxEmptyAction } from '@interfaces/redux';

export enum ActionType {
  BOOKS = 'BOOKS',
  BOOK_DETAIL = 'BOOK_DETAIL',
  CLEAR_BOOK_DETAIL = 'CLEAR_BOOK_DETAIL'
}

export interface State {
  books: Book[];
  bookDetail: Book | null;
}

type SetBooks = ReduxAction<ActionType.BOOKS, Book[]>;

type SetBookDetail = ReduxAction<ActionType.BOOK_DETAIL, Book>;

type ClearBookDetail = ReduxEmptyAction<ActionType.CLEAR_BOOK_DETAIL>;

export type Actions = SetBooks | SetBookDetail | ClearBookDetail;
