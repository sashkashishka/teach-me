import express, { Request, Response } from 'express';

import { ClientModel } from '../../models';
import { ErrorResBody } from './types';

const router = express.Router();

const path = '/api/login';


interface LoginReqBody {
  login: string;
  password: string;
}

interface AuthResSuccess {
  name: string;
  login: string;
  stars: number;
  // @todo add proper path
  redirect: string;
}

type LoginResBody = ErrorResBody
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
    const [client] = await ClientModel
      .find({ login });

    if (client === undefined || login !== password) {
      return res.status(401).json({
        error: 'Невірний логін або пароль',
      });
    }

    if (!client.active) {
      return res.status(400).json({
        error: 'Цей аккаунт деактивовано',
      });
    }

    if (req.session && !req.session.isAuth) {
      req.session.isAuth = true;
      req.session.login = login;
    }

    return res.status(200)
      .json({
        name: client.name,
        login: client.login,
        stars: client.stars,
        redirect: 'welcome to the rabbit hole',
      });
  } catch (e) {
    return res.status(500).json({
      error: 'Something went wrong. Pleas contact us',
      errorObj: e,
    });
  }
});

export default router;
