import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CabProductEcuador } from './entities/cab-product-ecuador.entity';
import { CabProductPeru } from './entities/cab-product-peru.entity';
import { DATABASE_CNX } from 'src/constants/constant';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(CabProductEcuador, DATABASE_CNX.ECUADORDWH)
    private repoEcuador: Repository<CabProductEcuador>,
    @InjectRepository(CabProductPeru, DATABASE_CNX.PASSARELADWH)
    private repoPeru: Repository<CabProductPeru>,
  ) {}

  async getProductBySku(sku: String, pais: String) {
    if (pais !== 'PER' && pais !== 'ECU') {
      throw new BadRequestException(`País inválido: ${pais}`);
    }

    const product =
      pais === 'PER'
        ? await this.repoPeru.findOne({
            where: { sku: `${sku}` },
          })
        : await this.repoEcuador.findOne({
            where: { sku: `${sku}` },
          });

    if (!product)
      throw new NotFoundException(
        `No se ha encontrado un producto con este SKU: ${sku}`,
      );
    return product;
  }
}
