import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product-service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiSecurity,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('API Producto')
@Controller('product')
@UseGuards(AuthGuard('basic'))
@ApiSecurity('basic-auth')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':sku')
  @ApiOperation({
    summary: 'Get a product by SKU and country',
    description: 'Retrieve a specific product by their SKU.',
  })
  @ApiParam({ name: 'sku', description: 'The SKU of the product to retrieve' })
  @ApiParam({
    name: 'pais',
    description: 'The country of the product to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Return the product with the given SKU',
  })
  @ApiResponse({ status: 404, description: 'Client not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getClientById(@Param('sku') sku: string, @Query('pais') pais: string) {
    return this.productService.getProductBySku(sku, pais);
  }
}
