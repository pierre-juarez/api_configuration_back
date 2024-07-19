import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ConfigurationDto {
  @ApiProperty({
    description: 'Name Endpoint',
    example: 'URL API PRODUCTO',
  })
  @IsNotEmpty()
  @IsString()
  clave: String;

  @ApiProperty({
    description: 'Url Endpoint',
    example: 'https://endpoint.com/api',
  })
  @IsNotEmpty()
  @IsString()
  valor: String;

  @ApiProperty({
    description: 'Environment DEV/PROD',
    example: 'DEV',
  })
  @IsNotEmpty()
  @IsString()
  ambiente: String;

  @ApiProperty({
    description: 'Type request',
    example: 'GET',
  })
  @IsNotEmpty()
  @IsString()
  type_request: String;

  @ApiProperty({
    description: 'ID Cliente',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;
}
