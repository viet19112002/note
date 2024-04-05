import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NoteService } from './Note.service';
import { CreateNoteDto } from './create-note.dto';
import { UpdateNoteDto } from './update-note.sto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from 'src/utils/object-id-validate.pipe';

@ApiTags('Note')
@Controller('notes')
export class NoteController {
  constructor(private readonly NoteService: NoteService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.NoteService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.NoteService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.NoteService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true })
  @Put(':id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.NoteService.update(id, updateNoteDto);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.NoteService.remove(id);
  }
}
