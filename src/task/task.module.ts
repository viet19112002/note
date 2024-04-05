import { Module } from '@nestjs/common';
import { TaskService } from './Task.service';
import { TaskController } from './Task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, taskSchema } from './task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: taskSchema,
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
