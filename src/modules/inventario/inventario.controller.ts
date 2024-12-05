import { Controller, Get, Query } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('API Inventario')
@Controller('api-inventario')
export class InventarioController {
  constructor(private readonly service: InventarioService) {}

  @Get('first-updated')
  async getFirstUpdate() {
    return this.service.getFirstUpdateInventory();
  }

  @Get('updated')
  async getUpdatedProducts(
    @Query('date') date: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 100,
  ) {
    return this.service.getUpdatedProducts(date, page, limit);
  }
}
