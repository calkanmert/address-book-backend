import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import result from '../utils/result';
import userService from '../services/user.service';
import token from '../utils/token';

const getAuthenticatedUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    result(res, 200, 'success', req.user);
  } catch (err: any) {
    next(err);
  }
}

const generateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (user) {
      const checkPassword = await bcrypt.compare(req.body.password, user.password);
      if (checkPassword) {
        const data = {
          access_token: token.generateAccessToken({ user_id: user._id }),
          refresh_token: token.generateRefreshToken({ user_id: user._id })
        };
        result(res, 200, 'token_generated', data);
        return;
      }
    }
    result(res, 404, 'wrong_email_or_password');
  } catch (err: any) {
    next(err);
  }
}

export default {
  getAuthenticatedUser,
  generateToken,
}
