import { Repository } from 'typeorm';
import { CabProduct } from './entities/cab-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(CabProduct, 'dwh_ecuador')
    private cabProduct: Repository<CabProduct>,
  ) {}

  async getProductBySku(sku: String) {
    const product = await this.cabProduct.findOne({
      where: { producto: `${sku}` },
    });
    if (!product)
      throw new NotFoundException(
        `No se ha encontrado un producto con este SKU: ${sku}`,
      );
    return product;
  }
}
