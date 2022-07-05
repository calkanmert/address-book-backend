import { NextFunction, Request, Response } from 'express';
import joi, { Schema } from 'joi';
import result from '../utils/result';

export default (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errorMessages: any[] = [];
    error.details.map(detail => {
      errorMessages.push({ field: detail.path.shift(), message: detail.message });
    });
    result(res, 422, 'validation_error', { messages: errorMessages });
    return;
  }
  next();
};
