import express, { Request, Response } from 'express';

import { checkSession } from '../../middlewares';
import { ClientModel } from '../../models';
import { ScheduleTask } from '../../models/clients';
import { ErrorResBody } from './types';

const router = express.Router();

const path = '/api/schedule/:pos?';

interface ScheduleParams {
  pos: string; // position in schedule's array
  [key: string]: string;
}

interface ScheduleResSuccess {
  schedule: Array<ScheduleTask> | Array<Array<ScheduleTask>>;
}

type ScheduleResBody = ScheduleResSuccess
  | ErrorResBody;

type ScheduleReq = Request<ScheduleParams, ScheduleResBody>;

type ScheduleRes = Response<ScheduleResBody>;


router.use(checkSession);

router.get(path, async (req: ScheduleReq, res: ScheduleRes) => {
  const { session, params } = req;
  let login = '';

  if (session) {
    login = session.login;
  }

  try {
    const [client] = await ClientModel
      .find({ login });


    if (params.pos) {
      return res.status(200).json({
        schedule: client.schedule[Number(params.pos)] || [],
      });
    }

    return res.status(200)
      .json({
        schedule: client.schedule,
      });
  } catch (e) {
    return res.status(500).json({
      error: 'Something went wrong. Pleas contact us',
      errorObj: e,
    });
  }
});

export default router;
