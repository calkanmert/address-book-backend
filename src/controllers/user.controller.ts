import { Request, Response } from 'express';
import sanitizer from 'sanitizer';
import bcrypt from 'bcrypt';
import result from '../utils/result';
import UserModel, { IUser } from '../models/user.model';

const create = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10).then(hash => {
    return hash;
  });

  const bodyData: IUser = {
    email: sanitizer.escape(req.body.email),
    password: hashedPassword,
  }
  
  const check = await UserModel.findOne({ email: bodyData.email });
  if (!check) {
    const user = await new UserModel(bodyData).save();
    if (user) {
      result(res, 201, 'user_created', { 
        id: user._id,
        email: user.email,
      });
      return;
    } else {
      result(res, 500, 'internal_server_error');
      return;
    }
  } else {
    result(res, 422, 'email_already_exist');
  }
}

export default {
  create
}
