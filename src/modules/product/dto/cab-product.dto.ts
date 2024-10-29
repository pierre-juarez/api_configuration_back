import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CabProductDto {
  @ApiProperty({
    description: 'Product ID',
    example: '18805057204',
  })
  @IsNotEmpty()
  @IsString()
  producto: string;

  @ApiProperty({
    description: 'Product name',
    example: 'Zapato Deportivo',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Product cost price without VAT',
    example: 150.75,
  })
  @IsNotEmpty()
  precioCostoSiva: number;

  @ApiProperty({
    description: 'Product bank price with VAT',
    example: 180.99,
  })
  @IsNotEmpty()
  precioBancoCiva: number;

  @ApiProperty({
    description: 'Purchase date',
    example: '2023-10-20',
  })
  @IsOptional()
  @IsString()
  fechaCompra: string;

  @ApiProperty({
    description: 'Date entered in the system',
    example: '2023-10-22',
  })
  @IsOptional()
  @IsString()
  fechaIng: string;

  @ApiProperty({
    description: 'Date entered in the CD',
    example: '2023-10-23',
  })
  @IsOptional()
  @IsString()
  fechaIngCD: string;

  @ApiProperty({
    description: 'Date entered in the TD',
    example: '2023-10-24',
  })
  @IsOptional()
  @IsString()
  fechaIngTD: string;

  @ApiProperty({
    description: 'Product supplier',
    example: 'Proveedor 1',
  })
  @IsOptional()
  @IsString()
  proveedor: string;

  @ApiProperty({
    description: 'Product origin',
    example: 'Importado',
  })
  @IsOptional()
  @IsString()
  procedencia: string;

  @ApiProperty({
    description: 'Available sizes',
    example: 'M, L, XL',
  })
  @IsOptional()
  @IsString()
  tallas: string;

  @ApiProperty({
    description: 'Material 1 description',
    example: 'Cuero',
  })
  @IsOptional()
  @IsString()
  material1: string;

  @ApiProperty({
    description: 'Accessory presentation',
    example: 'Caja',
  })
  @IsOptional()
  @IsString()
  presentacionAccesorio: string;

  @ApiProperty({
    description: 'Article details',
    example: 'Zapato de cuero resistente',
  })
  @IsOptional()
  @IsString()
  detalleArticulo: string;

  @ApiProperty({
    description: 'Product model',
    example: 'M001',
  })
  @IsOptional()
  @IsString()
  modelo: string;

  @ApiProperty({
    description: 'Main color of the product',
    example: 'Negro',
  })
  @IsOptional()
  @IsString()
  color1: string;

  @ApiProperty({
    description: 'Product category',
    example: 'Calzado',
  })
  @IsOptional()
  @IsString()
  categoria: string;

  @ApiProperty({
    description: 'Inner color of the product',
    example: 'Beige',
  })
  @IsOptional()
  @IsString()
  colorForro: string;

  @ApiProperty({
    description: 'Construction type',
    example: 'Cemento',
  })
  @IsOptional()
  @IsString()
  tipoConstruccion: string;

  @ApiProperty({
    description: 'Web category',
    example: 'Casual',
  })
  @IsOptional()
  @IsString()
  categoriaWeb: string;

  @ApiProperty({
    description: 'Web gender',
    example: 'Unisex',
  })
  @IsOptional()
  @IsString()
  generoWeb: string;

  @ApiProperty({
    description: 'Template color',
    example: 'Blanco',
  })
  @IsOptional()
  @IsString()
  colorPlantilla: string;

  @ApiProperty({
    description: 'Cane height',
    example: '10 cm',
  })
  @IsOptional()
  @IsString()
  alturaCana: string;

  @ApiProperty({
    description: 'Upper finish',
    example: 'Mate',
  })
  @IsOptional()
  @IsString()
  acabadoCapellada: string;

  @ApiProperty({
    description: 'Product usage',
    example: 'Casual',
  })
  @IsOptional()
  @IsString()
  uso: string;

  @ApiProperty({
    description: 'Lining material',
    example: 'Sintético',
  })
  @IsOptional()
  @IsString()
  materialForro: string;

  @ApiProperty({
    description: 'Heel style',
    example: 'Plataforma',
  })
  @IsOptional()
  @IsString()
  estiloTaco: string;

  @ApiProperty({
    description: 'Plant detail',
    example: 'Antideslizante',
  })
  @IsOptional()
  @IsString()
  detallePlanta: string;

  @ApiProperty({
    description: 'Unit of measure',
    example: 'Par',
  })
  @IsOptional()
  @IsString()
  unidadDeMedida: string;

  @ApiProperty({
    description: 'Material 2',
    example: 'Poliuretano',
  })
  @IsOptional()
  @IsString()
  material2: string;

  @ApiProperty({
    description: 'Material 3',
    example: 'Algodón',
  })
  @IsOptional()
  @IsString()
  material3: string;

  @ApiProperty({
    description: 'Product group',
    example: 'Calzado Deportivo',
  })
  @IsOptional()
  @IsString()
  grupoDeArticulos: string;

  @ApiProperty({
    description: 'Article type',
    example: 'Calzado',
  })
  @IsOptional()
  @IsString()
  tipoDeArticulo: string;

  @ApiProperty({
    description: 'Brand',
    example: 'Nike',
  })
  @IsOptional()
  @IsString()
  marca: string;

  @ApiProperty({
    description: 'Secondary color',
    example: 'Azul',
  })
  @IsOptional()
  @IsString()
  color2: string;

  @ApiProperty({
    description: 'Sole material',
    example: 'Goma',
  })
  @IsOptional()
  @IsString()
  materialHuella: string;

  @ApiProperty({
    description: 'Template material',
    example: 'Textil',
  })
  @IsOptional()
  @IsString()
  materialPlantilla: string;

  @ApiProperty({
    description: 'Construction type',
    example: 'Cemento',
  })
  @IsOptional()
  @IsString()
  construccion: string;

  @ApiProperty({
    description: 'Last type',
    example: 'Redondeada',
  })
  @IsOptional()
  @IsString()
  tipoHorma: string;

  @ApiProperty({
    description: 'Gender',
    example: 'Masculino',
  })
  @IsOptional()
  @IsString()
  genero: string;

  @ApiProperty({
    description: 'Web style',
    example: 'Moderno',
  })
  @IsOptional()
  @IsString()
  estiloWeb: string;

  @ApiProperty({
    description: 'Occasion',
    example: 'Deportivo',
  })
  @IsOptional()
  @IsString()
  ocasion: string;

  @ApiProperty({
    description: 'Toe style',
    example: 'Punta Redonda',
  })
  @IsOptional()
  @IsString()
  estiloPunta: string;

  @ApiProperty({
    description: 'Sole color',
    example: 'Negro',
  })
  @IsOptional()
  @IsString()
  colorPlanta: string;

  @ApiProperty({
    description: 'Product line',
    example: 'Deportivo',
  })
  @IsOptional()
  @IsString()
  linea: string;

  @ApiProperty({
    description: 'Season',
    example: 'Invierno',
  })
  @IsOptional()
  @IsString()
  temporada: string;

  @ApiProperty({
    description: 'Sole type',
    example: 'Antideslizante',
  })
  @IsOptional()
  @IsString()
  tipoHuella: string;

  @ApiProperty({
    description: 'Sole material',
    example: 'Caucho',
  })
  @IsOptional()
  @IsString()
  materialPlanta: string;

  @ApiProperty({
    description: 'Third color',
    example: 'Gris',
  })
  @IsOptional()
  @IsString()
  color3: string;

  @ApiProperty({
    description: 'Product image URL',
    example: 'https://example.com/images/product.jpg',
  })
  @IsOptional()
  @IsString()
  urlImagen: string;
}
