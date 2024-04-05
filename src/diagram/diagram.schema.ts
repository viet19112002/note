import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type DiagramDocument = Diagram & Document;

export class Diagram {
  @Prop()
  diagramname: string;
  @Prop()
  password: string;
  @Prop()
  fullName: string;
  @Prop()
  deviceId: string;
  @Prop()
  macId: string;
  @Prop()
  googleId: string;
}
export const diagramSchema = SchemaFactory.createForClass(Diagram);
