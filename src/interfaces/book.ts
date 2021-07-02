export type ID = number;

export type Author = string;

export type Publisher = string;

export enum Genre {
  SHORT_STORY = 'SHORT_STORY',
  OTHER = 'OTHER',
  SUSPENSE = 'SUSPENSE',
  THRILLER = 'thriller',
  FICTION = 'FICTION'
}

export interface Book {
  id: ID;
  author: Author;
  title: string;
  genre: Genre;
  publisher: Publisher;
  year: string;
  imageUrl: string | null;
}
