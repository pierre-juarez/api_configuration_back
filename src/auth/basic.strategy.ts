import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

@Injectable()
export class BasicStrategyExport extends PassportStrategy(BasicStrategy) {
  private readonly validUsername = 'back_smartfootloose';
  private readonly validPassword = process.env.PASSWORD_AUTH;

  constructor() {
    super();
  }

  validate(username: String, password: String): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      return true;
    }
    throw new UnauthorizedException();
  }
}
