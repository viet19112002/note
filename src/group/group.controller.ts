import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GroupService } from './Group.service';
import { CreateGroupDto } from './create-group.dto';
import { UpdateGroupDto } from './update-group.sto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from 'src/utils/object-id-validate.pipe';

@ApiTags('Group')
@Controller('groups')
export class GroupController {
  constructor(private readonly GroupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.GroupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.GroupService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.GroupService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true })
  @Put(':id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.GroupService.update(id, updateGroupDto);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.GroupService.remove(id);
  }
}
