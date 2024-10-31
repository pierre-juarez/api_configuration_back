import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class LogDto {
  @ApiProperty({
    description: 'Tag describing the source or category of the error',
    example: 'DatabaseError',
  })
  @IsNotEmpty()
  @IsString()
  tag: string;

  @ApiProperty({
    description: 'Error message providing details about the error',
    example: 'Unable to connect to database',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({
    description: 'Stack trace of the error for debugging purposes',
    example: 'Error at line 23 in /src/database/connection.ts',
    required: false, // Opcional
  })
  @IsOptional()
  @IsString()
  stackTrace?: string;
}
