import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventario } from './entities/inventario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario, 'db_log')
    private repoInventory: Repository<Inventario>,
  ) {}

  async getFirstUpdateInventory(): Promise<Date> {
    const result = await this.repoInventory
      .createQueryBuilder('tb_products')
      .select('MIN(tb_products.last_updated)', 'last_updated')
      .getRawOne();
    return result?.last_updated || null;
  }

  async getUpdatedProducts(date: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [data, total] = await this.repoInventory
      .createQueryBuilder('tb_products')
      .select([
        'tb_products.sku',
        'tb_products.with_cu',
        'tb_products.last_updated',
      ])
      .where('tb_products.last_updated >= :date', { date })
      .andWhere('LEN(tb_products.sku) = 11')
      .orderBy('tb_products.last_updated', 'ASC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }
}
