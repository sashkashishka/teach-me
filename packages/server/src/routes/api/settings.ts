import express, { Request, Response } from 'express';

import { checkSession } from '../../middlewares';
import { SettingModel } from '../../models';
import { Setting } from '../../models/settings';
import { ErrorResBody } from './types';

const router = express.Router();

const path = '/api/settings';

interface SettingsReqBody {
  task: string; // task name
  pos: number;
}

interface SettingsResSuccess {
  setting: Setting;
}

type SettingsResBody = SettingsResSuccess
  | ErrorResBody;

type SettingsReq = Request<{}, SettingsResBody, SettingsReqBody>;

type SettingsRes = Response<SettingsResBody>;


router.use(checkSession);

router.post(path, async (req: SettingsReq, res: SettingsRes) => {
  const { body } = req;
  const { task, pos } = body;

  if (task === undefined || pos === undefined) {
    return res.status(200).json({
      error: 'Provide task and pos data',
    });
  }

  try {
    const [client] = await SettingModel
      .find({ task });

    if (client === undefined) {
      return res.status(200).json({
        setting: {},
      });
    }

    return res.status(200)
      .json({
        setting: client.settings[pos] || {},
      });
  } catch (e) {
    return res.status(500).json({
      error: 'Something went wrong. Pleas contact us',
      errorObj: e,
    });
  }
});

export default router;
