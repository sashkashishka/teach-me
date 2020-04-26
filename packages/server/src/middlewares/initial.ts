import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

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
    middleware: cookieParser,
    args: [],
  },
];
