import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DiagramService } from './Diagram.service';
import { CreateDiagramDto } from './create-diagram.dto';
import { UpdateDiagramDto } from './update-diagram.sto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from 'src/utils/object-id-validate.pipe';

@ApiTags('Diagram')
@Controller('diagrams')
export class DiagramController {
  constructor(private readonly DiagramService: DiagramService) {}

  @Post()
  create(@Body() createDiagramDto: CreateDiagramDto) {
    return this.DiagramService.create(createDiagramDto);
  }

  @Get()
  findAll() {
    return this.DiagramService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.DiagramService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true })
  @Put(':id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateDiagramDto: UpdateDiagramDto) {
    return this.DiagramService.update(id, updateDiagramDto);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.DiagramService.remove(id);
  }
}
