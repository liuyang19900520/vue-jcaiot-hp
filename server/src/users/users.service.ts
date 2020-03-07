import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/users.schema';

// export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username });
  }
}