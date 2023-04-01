import { Logger, LogLevel } from '@koakh/typescript-simple-logger';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import c from './config/constants';
import { MainController } from './controllers';
import { MainServer } from './main-server';
import { allowCrossDomainMiddleware, expressTokenGuardMiddleware, redirectMiddleware } from './middleware';
import { MainRoute } from './routes';
import { MainService } from './services';

// used on debug mode to prevent: 'Node.js request CERT_HAS_EXPIRED', used in .env
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export class App {
  // static
  public static log(logLevel: LogLevel, message: string | object) {
    App.logger.log(logLevel, message);
  }
  private static logger: Logger = new Logger(c.LOG_LEVEL, c.LOG_FILE_PATH);
  // private properties
  private expressApp: Application;
  private mainServer: MainServer;
  private mainService: MainService;
  private mainController: MainController;
  private mainRoute: MainRoute;

  constructor() {
    // init express server
    this.expressApp = express();
    // middleware
    this.configMiddleware();
    // setup main http server/socket server
    this.mainServer = new MainServer(this.expressApp);
    // setup mainService
    this.mainService = new MainService(this.mainServer);
    // inject mainService
    this.mainController = new MainController(this.mainService);
    // inject expressApp and mainController
    this.mainRoute = new MainRoute(this.expressApp, this.mainController);
  }

  // middleware
  private configMiddleware(): void {
    // redirect
    this.expressApp.use(redirectMiddleware);
    // custom cors
    this.expressApp.use(allowCrossDomainMiddleware);
    // tokenGuard
    this.expressApp.use(expressTokenGuardMiddleware);
    // // application/json type post data
    this.expressApp.use(bodyParser.json());
    // application/x-www-form-urlencoded post data
    this.expressApp.use(bodyParser.urlencoded({ extended: true }));
  }
}

export default new App();