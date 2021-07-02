export interface Author {
  id: string;
  givenName: string;
  familyName: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  picture: string | null;
  author?: Author;
}
