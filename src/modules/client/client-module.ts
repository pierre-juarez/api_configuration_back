import { Module } from '@nestjs/common';
import { ClientController } from './client-controller';
import { ClientService } from './client-service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabClient } from './entities/cab-client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CabClient])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
