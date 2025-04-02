import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { DATABASE_CNX } from 'src/constants/constant';

@Module({
  imports: [TypeOrmModule.forFeature([Log], DATABASE_CNX.LOG)],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
