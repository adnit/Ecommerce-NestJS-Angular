import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { PasswordUtil } from '../utils/password.util';
import { Request, Response, NextFunction } from 'express';

export class PasswordHasherMiddleware implements NestMiddleware {
  async use(request: Request, response: Response, next: NextFunction) { 
    console.log('This first')
    if (request.body && request.body.password && PasswordUtil.checkPasswordStrength(request.body.password)) {
      request.body.password = await PasswordUtil.hashPassword(request.body.password);
      next();
    } else {
      throw new HttpException('Weak password provided', HttpStatus.BAD_REQUEST);
    }
  }
}
