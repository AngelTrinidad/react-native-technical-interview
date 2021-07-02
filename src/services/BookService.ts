import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book, ID } from '@interfaces/book';

import { GetBookResponse, GetBooksResponse } from './types';

export default {
  /**
   * Method to get books
   * @returns {GetBooksResponse} Promise of books
   */
  getBooks: (): Promise<GetBooksResponse> => {
    return new Promise((resolve, reject) => {
      try {
        resolve({ ok: true, data: BOOKS_MOCK });
      } catch (error) {
        reject(error);
      }
    });
  },
  getBookByID: (id: ID): Promise<GetBookResponse> => {
    return new Promise((resolve, reject) => {
      try {
        // Get book by id
        const book: Book[] = BOOKS_MOCK.filter(e => e.id === id);

        // Validate if isn't exists
        if (book.length === 0) throw Error('Book not found');

        // Return book finded
        resolve({ ok: true, data: book[0] });
      } catch (error) {
        reject(error);
      }
    });
  }
};
