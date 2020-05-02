import express, { Request, Response } from 'express';

import { checkSession } from '../../middlewares';
import { TaskModel } from '../../models';
import { Tasks } from '../../models/tasks';
import { ErrorResBody } from './types';

const router = express.Router();

const path = '/api/tasks';

type TasksResBody = Tasks
  | ErrorResBody;

type TasksReq = Request<{}, TasksResBody>;

type TasksRes = Response<TasksResBody>;


router.use(checkSession);

router.get(path, async (req: TasksReq, res: TasksRes) => {
  try {
    const [tasks] = await TaskModel
      .find({}, '-_id');

    if (tasks === undefined) {
      // @ts-ignore
      return res.status(200).json({});
    }

    return res.status(200)
      .json(tasks);
  } catch (e) {
    return res.status(500).json({
      error: 'Something went wrong. Pleas contact us',
      errorObj: e,
    });
  }
});

export default router;


