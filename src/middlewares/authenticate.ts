import express, { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import result from '../utils/result';
import userService from '../services/user.service';

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const access_token = req.header('x-access-token');
  if (access_token) {
    try {
      const verify = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET_KEY || 'PmRZjuSWSF') as JwtPayload;
      if (verify) {
        const user: any = await userService.getUserById(verify.user_id);
        req.user = {
          _id: user._id,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
        next();
      }
    } catch (err: any) {
      switch (err.name) {
        case 'JsonWebTokenError':
          result(res, 401, 'unauthorized');
          break;
        case 'TokenExpiredError':
          result(res, 401, 'expired_token');
          break;
      }
    }
  }
}

export default {
  authenticateToken,
}
