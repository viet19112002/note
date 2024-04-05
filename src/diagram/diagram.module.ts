import { Module } from '@nestjs/common';
import { DiagramService } from './Diagram.service';
import { DiagramController } from './Diagram.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Diagram, diagramSchema } from './diagram.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Diagram.name,
        schema: diagramSchema,
      },
    ]),
  ],
  controllers: [DiagramController],
  providers: [DiagramService],
})
export class DiagramModule {}
