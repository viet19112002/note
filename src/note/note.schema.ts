import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { NoteEnums } from 'src/utils/enums/note-enums';
import { MissionType } from 'src/utils/types/mission-type';

export type NoteDocument = Note & Document;

export class Note {
  @Prop()
  title: string;

  @Prop({
    type: {
      isCheck: { type: Boolean, default: false },
      description: { type: String, default: '' },
    },
  })
  mission: MissionType;

  @Prop()
  description: string;

  @Prop()
  record: boolean;

  @Prop()
  image: string;

  @Prop()
  createdAt: string;

  @Prop()
  alertTime: string;

  @Prop()
  ishidden: boolean;

  @Prop()
  theme: NoteEnums;
}
export const noteSchema = SchemaFactory.createForClass(Note);
