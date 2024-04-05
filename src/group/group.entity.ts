import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class Group {
  @ApiProperty({ name: 'userId', required: true })
  @IsNotEmpty()
  @IsMongoId()
  userId: ObjectId;

  @ApiProperty({ name: 'title', required: true })
  @IsNotEmpty()
  @IsString()
  title: string;
}
