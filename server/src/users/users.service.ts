import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, AddUserDTO, } from '../users/users.schema';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from '../auth/constants';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username });
  }

  async create(AddUserDTO: AddUserDTO): Promise<any> {
    let returnDb = await this.findOne(AddUserDTO.username);
    console.log(returnDb)
    if (returnDb) {
      throw new SystemException(ApiErrorCode.REGISTER_FAILD, "REGISTER_FAILD", HttpStatus.OK);
    }
    const salt: string = bcrypt.genSaltSync(jwtConstants.saltRounds);
    const newPassword = bcrypt.hashSync(AddUserDTO.password, salt);
    AddUserDTO.password = newPassword;
    AddUserDTO.salt = salt;
    const addUser = new this.userModel(AddUserDTO);
    let returnUser: User = await addUser.save();

    return { usrename: returnUser.username, admin: returnUser.admin };
  }


}