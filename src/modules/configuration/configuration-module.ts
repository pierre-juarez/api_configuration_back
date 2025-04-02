import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './entities/configuration.entity';
import { ConfigurationController } from './configuration-controller';
import { ConfigurationService } from './configuration-service';
import { DATABASE_CNX } from 'src/constants/constant';

@Module({
  imports: [TypeOrmModule.forFeature([Configuration], DATABASE_CNX.SMART)],
  controllers: [ConfigurationController],
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
