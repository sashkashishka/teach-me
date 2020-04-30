import express, { Request, Response } from 'express';
// import { SessionOptions } from 'express-session';

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

  console.log(req?.session?.isNew())

  try {
    const [client] = await ClientsModel.find({ login });

    if (client === undefined || login !== password) {
      return res.status(401).json({
        error: 'Невірний логін або пароль',
      });
    }

    await client.save();

    return res.status(200)
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
