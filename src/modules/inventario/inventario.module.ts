import { Module } from '@nestjs/common';
import { InventarioController } from './inventario.controller';
import { InventarioService } from './inventario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from './entities/inventario.entity';
import { DATABASE_CNX } from 'src/constants/constant';

@Module({
  imports: [TypeOrmModule.forFeature([Inventario], DATABASE_CNX.LOG)],
  controllers: [InventarioController],
  providers: [InventarioService],
})
export class InventarioModule {}
