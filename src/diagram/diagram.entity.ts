import { ApiProperty } from '@nestjs/swagger';
import {
  IsMongoId,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ObjectId } from 'mongoose';
import { BranchType } from 'src/utils/types/branchs-type';

export class Diagram {
  @ApiProperty({ name: 'userId', required: true })
  @IsMongoId()
  userId: ObjectId;

  @ApiProperty({ name: 'branchs', required: false })
  @IsOptional()
  @IsObject()
  branchs: BranchType;

  @ApiProperty({ name: 'title', required: false })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({ name: 'createdDate', required: false })
  @IsOptional()
  @IsString()
  createdDate: Date;
}
