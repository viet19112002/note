import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupDocument } from './group.schema';
import { Model } from 'mongoose';
import { CreateGroupDto } from './create-group.dto';
import { UpdateGroupDto } from './update-group.sto';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group.name)
    private readonly GroupModel: Model<GroupDocument>,
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<GroupDocument> {
    const Group = new this.GroupModel(createGroupDto);
    return Group.save();
  }

  async findAll(): Promise<GroupDocument[]> {
    return this.GroupModel.find().exec();
  }

  async findOne(id: string) {
    return this.GroupModel.findById(id);
  }

  async update(
    id: string,
    updateGroupDto: UpdateGroupDto,
  ): Promise<GroupDocument> {
    return this.GroupModel.findByIdAndUpdate(id, updateGroupDto);
  }

  async remove(id: string) {
    return this.GroupModel.findByIdAndDelete(id);
  }
}
