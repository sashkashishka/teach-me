import express, { Request, Response } from 'express';

import { checkSession } from '../../middlewares';
import { SourceModel } from '../../models';
import { Source } from '../../models/sources';
import { ErrorResBody } from './types';

const router = express.Router();

const path = '/api/sources';

interface SourcesReqBody {
  task: string; // task name
  pos: number;
}

interface SourcesResSuccess {
  sources: Source;
}

type SourcesResBody = SourcesResSuccess
  | ErrorResBody;

type SourcesReq = Request<{}, SourcesResBody, SourcesReqBody>;

type SourcesRes = Response<SourcesResBody>;


router.use(path, checkSession);

router.post(path, async (req: SourcesReq, res: SourcesRes) => {
  const { body } = req;
  const { task, pos } = body;

  if (task === undefined || pos === undefined) {
    return res.status(200).json({
      error: 'Provide task and pos data',
    });
  }

  try {
    const [client] = await SourceModel
      .find({ task });

    if (client === undefined) {
      return res.status(200).json({
        sources: {
          data: undefined,
        },
      });
    }

    return res.status(200)
      .json({
        sources: client.sources[pos] || {
          data: undefined,
        },
      });
  } catch (e) {
    return res.status(500).json({
      error: 'Something went wrong. Pleas contact us',
      errorObj: e,
    });
  }
});

export default router;

