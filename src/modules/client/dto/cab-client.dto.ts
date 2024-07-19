import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CabClientDto {
  @ApiProperty({
    description: 'Name Client / City',
    example: 'Footloose Bolivia',
  })
  @IsNotEmpty()
  @IsString()
  cliente: String;
}
