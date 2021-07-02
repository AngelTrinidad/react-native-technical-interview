import { Book, Genre } from '@interfaces/book';

export const BOOKS_MOCK: Book[] = [
  {
    id: 0,
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water: The revenge of the dark fire ring',
    genre: Genre.SHORT_STORY,
    publisher: 'Butterworth-Heinemann',
    year: '1968',
    imageUrl: null
  },
  {
    id: 1,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: Genre.OTHER,
    publisher: 'Pocket Books',
    year: '1989',
    imageUrl: null
  },
  {
    id: 2,
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: Genre.SUSPENSE,
    publisher: 'Little, Brown',
    year: '1985',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'
  },
  {
    id: 3,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: Genre.SUSPENSE,
    publisher: 'Pocket Books',
    year: '1989',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
  },
  {
    id: 4,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: Genre.SUSPENSE,
    publisher: 'Pocket Books',
    year: '1989',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
  },
  {
    id: 5,
    author: 'Paula Hawkins',
    title: 'The Girl on the Train\n',
    genre: Genre.SUSPENSE,
    publisher: 'Riverhead Books',
    year: '2015',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg'
  },
  {
    id: 6,
    author: 'Anthony Doerr',
    title: 'All the Light We Cannot See',
    genre: Genre.SUSPENSE,
    publisher: 'Scribner',
    year: '2014',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg'
  },
  {
    id: 7,
    author: 'John Katzenbach',
    title: 'The analyst',
    genre: Genre.THRILLER,
    publisher: 'Ballantine Books',
    year: '2003',
    imageUrl:
      'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg'
  },
  {
    id: 8,
    author: 'Andy Weir',
    title: 'The Martian',
    genre: Genre.FICTION,
    publisher: 'Crown Publishing Group',
    year: '2011',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg'
  }
];
