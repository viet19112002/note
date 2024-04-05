import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.sto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly TaskModel: Model<TaskDocument>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<TaskDocument> {
    const Task = new this.TaskModel(createTaskDto);
    return Task.save();
  }

  async findAll(): Promise<TaskDocument[]> {
    return this.TaskModel.find().exec();
  }

  async findOne(id: string) {
    return this.TaskModel.findById(id);
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<TaskDocument> {
    return this.TaskModel.findByIdAndUpdate(id, updateTaskDto);
  }

  async remove(id: string) {
    return this.TaskModel.findByIdAndDelete(id);
  }
}
