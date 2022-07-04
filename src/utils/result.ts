import { Response } from 'express';

export default (res: Response, code: number , status: string, data?: any) => {
  res.status(code).json({
    status,
    data,
  });
}
