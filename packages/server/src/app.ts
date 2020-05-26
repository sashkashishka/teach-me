import express, {
  Express,
  Router,
  Request,
  Response,
  NextFunction,
} from 'express';
import path from 'path';


interface Middleware {
  middleware: () => any;
  args: any[];
}

interface Options {
  routes: Router[];
  middlewares: Middleware[];
  connectDB: () => Promise<void>;
  PORT: number;
}

class App {
  public app: Express;

  private routes: Options['routes'];

  private middlewares: Options['middlewares'];

  private connectDB: Options['connectDB'];

  private PORT: Options['PORT'];

  constructor(options: Options) {
    const {
      routes,
      middlewares,
      connectDB,
      PORT,
    } = options;

    this.app = express();

    this.routes = routes;
    this.middlewares = middlewares;
    this.connectDB = connectDB;
    this.PORT = PORT;
  }

  private async initMiddlewares(): Promise<void> {
    // @ts-ignore
    this.middlewares.forEach(({ middleware, args }) => this.app.use(middleware(...args)));
  }

  private async initRoutes(): Promise<void> {
    this.routes.forEach(router => this.app.use('/', router));
  }

  private async serveStatic(): Promise<void> {
    this.app.use(express.static(path.resolve(
      __dirname,
      process.env.NODE_ENV === 'production'
        ? 'public'
        : '../public'
    )));
  }

  private async setCachePolicy(): Promise<void> {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      const { path: urlPath } = req;
      const { ext } = path.parse(urlPath);

      switch (ext) {
        case ('.json'):
        case ('.html'): {
          res.setHeader('Cache-control', 'public, max-age=0, must-revalidate');
          break;
        }

        case ('.css'):
        case ('.js'):
        default: {
          if (urlPath.match('sw.js') || urlPath === '/') {
            res.setHeader('Cache-control', 'public, max-age=0, must-revalidate');
          } else {
            res.setHeader('Cache-control', 'public, max-age=31536000, immutable');
          }
        }
      }

      next();
    });
  }

  public async start(): Promise<void> {
    await this.connectDB();
    await this.initMiddlewares();
    await this.initRoutes();
    await this.setCachePolicy();
    await this.serveStatic();

    this.app.listen(this.PORT, () => {
      console.log(`Teachme app listeting port ${this.PORT}`);
    });
  }
}

export default App;
