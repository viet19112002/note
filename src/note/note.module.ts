import { Module } from '@nestjs/common';
import { NoteService } from './Note.service';
import { NoteController } from './Note.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, noteSchema } from './note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Note.name,
        schema: noteSchema,
      },
    ]),
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
