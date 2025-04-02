import { Module } from '@nestjs/common';
import { ProductController } from './product-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product-service';
import { CabProductEcuador } from './entities/cab-product-ecuador.entity';
import { CabProductPeru } from './entities/cab-product-peru.entity';
import { DATABASE_CNX } from 'src/constants/constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([CabProductEcuador], DATABASE_CNX.ECUADORDWH),
    TypeOrmModule.forFeature([CabProductPeru], DATABASE_CNX.PASSARELADWH),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
