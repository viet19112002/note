import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

export class User {
  @Prop()
  username: string;
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
export const userSchema = SchemaFactory.createForClass(User);
