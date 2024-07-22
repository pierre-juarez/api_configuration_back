import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategyExport } from './basic.strategy';

@Module({
  imports: [PassportModule],
  providers: [BasicStrategyExport],
})
export class AuthModule {}
