import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieSession from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';

import getRedisHost from '../utils/get-redis-host';

const RedisStore = connectRedis(cookieSession);
const client = redis.createClient({
  host: getRedisHost(),
  port: Number(process.env.REDIS_PORT),
});

client.on('ready', () => {
  console.log('redis ready');
})

client.on('error', (e) => {
  console.log('redis error');
  console.log(e)
})


declare global {
  module Express {
    interface Session {
      isAuth: boolean;
      login: string;
    }
  }
}

export default [
  {
    middleware: helmet,
    args: [],
  },
  {
    middleware: bodyParser.json,
    args: [],
  },
  {
    middleware: bodyParser.urlencoded,
    args: [
      { extended: false },
    ],
  },
  {
    middleware: cors,
    args: [],
  },
  {
    middleware: cookieSession,
    args: [
      {
        secret: process.env.COOKIE_SECRET || 'test',
        name: 'session',
        store: new RedisStore({
          client,
          ttl: 14400,
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 14400000,
          sameSite: true,
          secure: process.env.NODE_ENV === 'production',
          httpOnly: true,
        },
      },
    ],
  },
];
