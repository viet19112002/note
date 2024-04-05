import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { DiagramModule } from './diagram/diagram.module';
import { GroupModule } from './group/group.module';
import { NoteModule } from './note/note.module';
import { TaskModule } from './task/task.module';

const ModuleImport = [
  UserModule,
  DiagramModule,
  GroupModule,
  NoteModule,
  TaskModule,
];

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nguyentrongviet19112002:banguoichoi1@cluster0.glry8qh.mongodb.net/?retryWrites=true&w=majority',
    ),

    ...ModuleImport,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
