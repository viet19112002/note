import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Diagram, DiagramDocument } from './diagram.schema';
import { Model } from 'mongoose';
import { CreateDiagramDto } from './create-diagram.dto';
import { UpdateDiagramDto } from './update-diagram.sto';

@Injectable()
export class DiagramService {
  constructor(
    @InjectModel(Diagram.name)
    private readonly DiagramModel: Model<DiagramDocument>,
  ) {}

  async create(createDiagramDto: CreateDiagramDto): Promise<DiagramDocument> {
    const Diagram = new this.DiagramModel(createDiagramDto);
    return Diagram.save();
  }

  async findAll(): Promise<DiagramDocument[]> {
    return this.DiagramModel.find().exec();
  }

  async findOne(id: string) {
    return this.DiagramModel.findById(id);
  }

  async update(
    id: string,
    updateDiagramDto: UpdateDiagramDto,
  ): Promise<DiagramDocument> {
    return this.DiagramModel.findByIdAndUpdate(id, updateDiagramDto);
  }

  async remove(id: string) {
    return this.DiagramModel.findByIdAndDelete(id);
  }
}
