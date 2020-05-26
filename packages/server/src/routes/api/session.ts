import express, { Request, Response } from 'express';

import { ErrorResBody } from './types';

const router = express.Router();

const path = '/api/session';


interface SessionReqBody {}

interface SessionResSuccess {
  status: number;
  username: string;
}

type SessionResBody = ErrorResBody
  | SessionResSuccess;

type SessionReq = Request<{}, SessionResBody, SessionReqBody>;

type SessionRes = Response<SessionResBody>;


router.get(path, async (req: SessionReq, res: SessionRes) => {
  const { session } = req;

  return res.status(200).json({
    status: session && session.isAuth ? 1 : 0,
    username: session && session.login ? session.login : '',
  });
});

export default router;
