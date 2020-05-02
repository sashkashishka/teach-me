import App from './app';
import connectDB from './db';
import { initialMiddlewares } from './middlewares';
import routes from './routes';


const PORT = Number(process.env.PORT || 3000);

// @todo add error catch middleware
const server = new App({
  routes,
  middlewares: [
    ...initialMiddlewares,
  ],
  connectDB,
  PORT,
});

server.start();
