import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ConfigurationDto {
  @IsNotEmpty()
  @IsString()
  clave: String;

  @IsNotEmpty()
  @IsString()
  valor: String;

  @IsNotEmpty()
  @IsString()
  ambiente: String;

  @IsNotEmpty()
  @IsString()
  type_request: String;

  @IsNotEmpty()
  @IsNumber()
  idCliente: number;
}
