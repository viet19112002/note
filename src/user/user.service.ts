import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.sto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const User = new this.UserModel(createUserDto);
    return User.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.UserModel.find().exec();
  }

  async findOne(id: string) {
    return this.UserModel.findById(id);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return this.UserModel.findByIdAndDelete(id);
  }

  async login(email: string, password: string) {
    return this.UserModel.findOne({ email, password });
  }
}
