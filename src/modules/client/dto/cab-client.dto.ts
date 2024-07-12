import { IsNotEmpty, IsString } from 'class-validator';

export class CabClientDto {
  @IsNotEmpty()
  @IsString()
  cliente: String;
}
