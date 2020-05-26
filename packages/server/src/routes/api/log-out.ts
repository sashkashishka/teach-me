import express, { Request, Response } from 'express';

const router = express.Router();

const path = '/api/logout';

interface LogoutResBody {
  redirect: '/';
}

type LogoutRes = Response<LogoutResBody>;


router.get(path, async (req: Request, res: LogoutRes) => {
  const { session } = req;

  if (session) {
    session.isAuth = false;
    session.login = '';
  }

  return res.status(200).redirect('/');
});

export default router;
