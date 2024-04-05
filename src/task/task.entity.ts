import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  isURL,
} from 'class-validator';
import { ObjectId } from 'mongoose';
import { TaskEnums } from 'src/utils/enums/task-enums';
import { BranchType } from 'src/utils/types/branchs-type';
import { MissionType } from 'src/utils/types/mission-type';

export class Task {
  @ApiProperty({ name: 'userId', required: true })
  @IsNotEmpty()
  @IsMongoId()
  userId: ObjectId;

  @ApiProperty({ name: 'groupId', required: true })
  @IsNotEmpty()
  @IsMongoId()
  groupId: ObjectId;

  @ApiProperty({ name: 'title', required: true })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ name: 'mission', required: false })
  @IsOptional()
  @IsObject()
  mission: MissionType;

  @ApiProperty({ name: 'description', required: false })
  @IsOptional()
  description: string;

  @ApiProperty({ name: 'record', required: false })
  @IsOptional()
  @IsBoolean()
  record: boolean;

  @ApiProperty({ name: 'image', required: false })
  @IsOptional()
  @IsUrl()
  image: string;

  @ApiProperty({ name: 'createdAt', required: false })
  @IsOptional()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ name: 'alertTime', required: false })
  @IsOptional()
  @IsDate()
  alertTime: Date;

  @ApiProperty({ name: 'isHidden', required: false })
  isHidden: boolean;

  @ApiProperty({ name: 'theme', required: false })
  @IsOptional()
  @IsEnum(TaskEnums)
  theme: TaskEnums;
}
