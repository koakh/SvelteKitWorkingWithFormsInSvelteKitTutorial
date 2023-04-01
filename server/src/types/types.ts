export enum LogService {
  HTTPS_SERVER = 'HTTPS_SERVER',
  SOCKET_SERVER = 'SOCKET_SERVER',
}
export interface Book {
  id: number;
  title: string;
  author: string;
  Genre: string;
  height: number;
  publisher: string;
}

export type BookProp = 'id' | 'title' | 'author' | 'Genre' | 'height' | 'publisher';

export type CreateBookDto = Book;

export type UpdateBookDto = Omit<Book, 'id'>;
