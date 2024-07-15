import { IsNotEmpty, IsString } from 'class-validator';

export class AmbienteDto {
  @IsNotEmpty()
  @IsString()
  ambiente: String;
}
