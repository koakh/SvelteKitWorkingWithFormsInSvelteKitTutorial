import fs from 'fs';
import { MainServer } from '../main-server';
import { Book, BookProp, CreateBookDto, UpdateBookDto } from '../types';

export class MainService {
  private books: Book[];

  constructor(private mainServer: MainServer) {
    const booksBuffer = fs.readFileSync('data/books.json');
    this.books = JSON.parse(booksBuffer.toString());
  }

  public checkIfIsValidBook = (field: BookProp, value: string | number) => {
    // check if is a valid/exist
    const exists = this.books.findIndex((e: Book) => e[field] === value);
    if (exists === -1) {
      throw new Error(`book not found! field '${field}' and value '${value}'`);
    }
  }

  public getBooks = (): Promise<Book[]> => new Promise((resolve, reject) => {
    try {
      resolve(this.books);
    } catch (error) {
      reject(error);
    }
  })

  public getBook = (id: number): Promise<Book> => new Promise((resolve, reject) => {
    try {
      // check if is a valid/exist
      this.checkIfIsValidBook('id', id);
      const document: Book = this.books.find((e:Book) => e.id === id);
      resolve(document);
    } catch (error) {
      reject(error);
    }
  })

  public createBook = (payload: CreateBookDto): Promise<Book> => new Promise((resolve, reject) => {
    try {
      const exists = this.books.findIndex((e: Book) => e.id === payload.id);
      if (exists > -1) {
        throw new Error(`book with with id '${payload.id}' already exists!`);
      }
      this.books.push(payload);
      resolve(payload);
    } catch (error) {
      reject(error);
    }
  })

  public updateBook = (bookId: number, payload: UpdateBookDto): Promise<Book> => new Promise((resolve, reject) => {
    try {
      // check if is a valid/exist
      this.checkIfIsValidBook('id', bookId);
      const index = this.books.findIndex((e: Book) => e.id === bookId);
      this.books[index] = {id:bookId, ...payload};
      resolve(this.books[index]);
    } catch (error) {
      reject(error);
    }
  })

  public removeBook = (bookId: number): Promise<void> => new Promise((resolve, reject) => {
    try {
      // check if is a valid/exist
      this.checkIfIsValidBook('id', bookId);
      this.books = this.books.filter((e:Book) => e.id !== bookId);
      resolve();
    } catch (error) {
      reject(error);
    }
  })
}
