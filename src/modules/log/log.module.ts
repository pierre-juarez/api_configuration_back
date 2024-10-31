import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log], 'db_log')],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
