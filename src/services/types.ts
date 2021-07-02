import { Book } from '@interfaces/book';

export type DataResponse<T> = {
  ok: boolean;
  data?: T;
};

export type GetBooksResponse = DataResponse<Book[]>;

export type GetBookResponse = DataResponse<Book>;
