import { NextFunction, Request, Response } from 'express';
import sanitizer from 'sanitizer';
import bcrypt from 'bcrypt';
import result from '../utils/result';
import { IUser } from '../models/user.model';
import userService from '../services/user.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10).then(hash => {
      return hash;
    });

    const bodyData: IUser = {
      email: sanitizer.escape(req.body.email),
      password: hashedPassword,
    }
    
    const check = await userService.getUserByEmail(bodyData.email);
    if (!check) {
      const user = await userService.createUser(bodyData);
      if (user) {
        result(res, 201, 'user_created', { 
          id: user._id,
          email: user.email,
        });
        return;
      }
    } else
      result(res, 422, 'email_already_exist');
  } catch (err: any) {
    next(err);
  }
}

export default {
  create
}
