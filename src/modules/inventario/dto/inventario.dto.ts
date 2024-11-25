import { IsNotEmpty, IsString } from 'class-validator';

export class InventarioDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsString()
  with_cu: string;

  @IsNotEmpty()
  @IsString()
  last_updated: string;
}
