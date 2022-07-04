import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.post('/', (req: Request, res: Response) => {
  res.send('ok');
});

export default router;
