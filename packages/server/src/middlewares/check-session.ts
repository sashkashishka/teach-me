import { Request, Response, NextFunction } from 'express';

interface CheckSessionResBody {
  redirect: string;
  error: string;
}

export default (req: Request, res: Response<CheckSessionResBody>, next: NextFunction) => {
  const { session, path } = req;

  if (session && session.isAuth && session.login) {
    next();
  } else {
    return res.status(401).json({
      redirect: `/?${path}`,
      error: 'Щоб переглянути дану сторінку необхідно авторизуватися',
    });
  }
};
