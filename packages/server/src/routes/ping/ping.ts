import express, { Request, Response } from 'express';

const router = express.Router();

const path = '/ping';

router.get(path, (req: Request, res: Response) => {
  res.status(200).json({
    pong: 'pong',
  });
});

export default router;
