import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AmbienteDto {
  @ApiProperty({
    description: 'Environment DEV/PROD',
    example: 'DEV',
  })
  @IsNotEmpty()
  @IsString()
  ambiente: String;
}
