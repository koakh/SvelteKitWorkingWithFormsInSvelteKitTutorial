import { Request, Response } from 'express';
import { MainService } from '../services';
import { Book, CreateBookDto, UpdateBookDto } from '../types';

export class MainController {
  constructor(private mainService: MainService) { }

  public getBooks = async (req: Request, res: Response) => {
    try {
      const documents: Book[] = await this.mainService.getBooks();
      res.send(documents);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  public getBook = async (req: Request, res: Response) => {
    try {
      const { bookId }: { [bookId: string]: string } = req.params;
      const document: Book = await this.mainService.getBook(parseInt(bookId));
      res.send(document);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  public createBook = async (req: Request, res: Response) => {
    try {
      const { body: payload }: { body: CreateBookDto } = req;
      const document = await this.mainService.createBook(payload);
      res.send(document);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  public updateBook = async (req: Request, res: Response) => {
    try {
      const { bookId } = req.params;
      const { body: payload }: { body: UpdateBookDto } = req;
      const result: Book = await this.mainService.updateBook(parseInt(bookId), payload);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  public removeBook = async (req: Request, res: Response) => {
    try {
      const { bookId }: { [bookId: string]: string } = req.params;
      await this.mainService.removeBook(parseInt(bookId));
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
