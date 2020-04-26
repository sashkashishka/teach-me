import express, { Request, Response } from 'express';

import { SessionCookie } from '../types';
import ClientsModel from '../../models/clients';

const router = express.Router();

const path = '/auth/logout';

interface LogoutResBody {
  status: 'ok';
}

interface LogoutReq extends Request {
  cookies: SessionCookie;
}

type LogoutRes = Response<LogoutResBody>;


router.post(path, async (req: LogoutReq, res: LogoutRes) => {
  const { cookies } = req;
  const { session } = cookies;

  try {
    const [client] = await ClientsModel.find({ session });

    if (client === undefined) {
      return res.status(401).json({
        error: 'Невірний логін або пароль',
      });
    }

    return res.status(200)
      .cookie('session', 'test', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000,
      })
      .json({
        name: client.name,
        stars: client.stars,
      });
  } catch (e) {
    return res.status(500).json({
      error: 'Something went wrong. Pleas contact us',
      errorObj: e,
    });
  }
});

export default router;
