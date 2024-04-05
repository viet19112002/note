import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './note.schema';
import { Model } from 'mongoose';
import { CreateNoteDto } from './create-note.dto';
import { UpdateNoteDto } from './update-note.sto';

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note.name)
    private readonly NoteModel: Model<NoteDocument>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<NoteDocument> {
    const Note = new this.NoteModel(createNoteDto);
    return Note.save();
  }

  async findAll(): Promise<NoteDocument[]> {
    return this.NoteModel.find().exec();
  }

  async findOne(id: string) {
    return this.NoteModel.findById(id);
  }

  async update(
    id: string,
    updateNoteDto: UpdateNoteDto,
  ): Promise<NoteDocument> {
    return this.NoteModel.findByIdAndUpdate(id, updateNoteDto);
  }

  async remove(id: string) {
    return this.NoteModel.findByIdAndDelete(id);
  }
}
