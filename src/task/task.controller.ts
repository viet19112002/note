import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService } from './Task.service';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.sto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from 'src/utils/object-id-validate.pipe';

@ApiTags('Task')
@Controller('tasks')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.TaskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.TaskService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.TaskService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true })
  @Put(':id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.TaskService.update(id, updateTaskDto);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.TaskService.remove(id);
  }
}
