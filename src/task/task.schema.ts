import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type TaskDocument = Task & Document;

export class Task {
  @Prop()
  taskname: string;
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
export const taskSchema = SchemaFactory.createForClass(Task);
