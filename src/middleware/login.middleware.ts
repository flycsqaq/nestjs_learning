import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // console.log('req');
    next();
  }
}

export const logger = (req: Request, res: Response, next: () => void) => {
//   console.log('req...');
  next();
};
