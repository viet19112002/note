import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type GroupDocument = Group & Document;

export class Group {
  @Prop()
  groupname: string;
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
export const groupSchema = SchemaFactory.createForClass(Group);
