import express, { Request, Response } from 'express';

import ClientsModel from '../../models/clients';

const router = express.Router();

const path = '/auth/login';

interface LoginReqBody {
  login: string;
  password: string;
}

interface AuthResError {
  error: string;
  errorObj?: Error;
}

interface AuthResSuccess {
  name: string;
  stars: number;
}

type LoginResBody = AuthResError
  | AuthResSuccess;

type LoginReq = Request<{}, LoginResBody, LoginReqBody>;

type LoginRes = Response<LoginResBody>;


router.post(path, async (req: LoginReq, res: LoginRes) => {
  const { body } = req;
  const {
    login,
    password,
  } = body;

  try {
    const [client] = await ClientsModel.find({ login });

    if (client === undefined || login !== password) {
      return res.status(401).json({
        error: 'Невірний логін або пароль',
      });
    }

    client.session = 'test';

    await client.save();

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
