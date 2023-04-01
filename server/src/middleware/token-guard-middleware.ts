import { NextFunction, Request, Response } from 'express';
import c from '../config/constants';

const unauthorizedMessage = 'Unauthorized! Please supply a valid token';

export const expressTokenGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('example1') || req.path.startsWith('example2')) {
    next();
  } else {
    const authorization: string = (req.headers.authorization)
      ? (req.headers.authorization).replace('Bearer ', '')
      : null;
    if (authorization !== c.TOKEN_GUARD_KEY) {
      res.status(401).send({ error: unauthorizedMessage });
    } else {
      next();
    }
  }
};
