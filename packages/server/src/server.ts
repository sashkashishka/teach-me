import App from './app';
import connectDB from './db';
import { initialMiddlewares } from './middlewares';
import {
  logInRouter,
  pingRouter,
} from './routes';


const PORT = Number(process.env.PORT || 3000);

const server = new App({
  routes: [
    logInRouter,
    pingRouter,
  ],
  middlewares: [
    ...initialMiddlewares,
  ],
  connectDB,
  PORT,
});

server.start();
