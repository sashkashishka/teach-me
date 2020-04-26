import express, { Express, Router } from 'express';


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

  public async start(): Promise<void> {
    await this.connectDB();
    await this.initMiddlewares();
    await this.initRoutes();

    this.app.listen(this.PORT, () => {
      console.log(`Teachme app listeting port ${this.PORT}`);
    });
  }
}

export default App;
