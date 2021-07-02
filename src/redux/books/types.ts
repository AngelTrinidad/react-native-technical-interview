import { Book } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';

export enum ActionType {
  BOOKS = 'BOOKS',
  BOOK_DETAIL = 'BOOK_DETAIL'
}

export interface State {
  books: Book[];
  bookDetail: Book | null;
}

type SetBooks = ReduxAction<ActionType.BOOKS, Book[]>;

type SetBookID = ReduxAction<ActionType.BOOK_DETAIL, Book>;

export type Actions = SetBooks | SetBookID;
