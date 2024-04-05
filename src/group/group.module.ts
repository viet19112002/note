import { Module } from '@nestjs/common';
import { GroupService } from './Group.service';
import { GroupController } from './Group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, groupSchema } from './group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Group.name,
        schema: groupSchema,
      },
    ]),
  ],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
