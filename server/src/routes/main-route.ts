import { Application } from 'express';
import { MainController } from '../controllers';

export class MainRoute {

  constructor(private app: Application, private mainController: MainController) {
    // init routes
    this.routes(this.app);
  }

  private routes = (app: Application): void => {
    app.route('/book')
      .post(this.mainController.createBook)
      .get(this.mainController.getBooks);
    app.route('/book/:bookId')
      .get(this.mainController.getBook)
      .put(this.mainController.updateBook)
      .delete(this.mainController.removeBook);
  }
}
