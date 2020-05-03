import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieSession from 'express-session';
import compression from 'compression';
import sessionFileStore from 'session-file-store';


const FileStore = sessionFileStore(cookieSession);


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
    middleware: compression,
    args: [],
  },
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
        store: new FileStore({
          ttl: 14400,
        }),
        resave: true,
        saveUninitialized: true,
        cookie: {
          maxAge: 14400000,
          sameSite: true,
          secure: false,
          httpOnly: true,
        },
      },
    ],
  },
];
