import { Module } from '@nestjs/common';
import { ProductController } from './product-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product-service';
import { CabProduct } from './entities/cab-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CabProduct], 'dwh_ecuador')],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
