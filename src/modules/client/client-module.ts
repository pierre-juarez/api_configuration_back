import { Module } from '@nestjs/common';
import { ClientController } from './client-controller';
import { ClientService } from './client-service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabClient } from './entities/cab-client.entity';
import { DATABASE_CNX } from 'src/constants/constant';

@Module({
  imports: [TypeOrmModule.forFeature([CabClient], DATABASE_CNX.SMART)],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
