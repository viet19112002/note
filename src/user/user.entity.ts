import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class User {
  @ApiProperty({ name: 'username', required: true })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ name: 'password', required: true })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ name: 'fullName', required: true })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ name: 'deviceId', required: false })
  @IsOptional()
  @IsString()
  deviceId: string;

  @ApiProperty({ name: 'macId', required: false })
  @IsOptional()
  @IsString()
  macId: string;

  @ApiProperty({ name: 'googleId', required: false })
  @IsOptional()
  @IsString()
  googleId: string;
}
