import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddUserDTO, User } from '../users/users.schema';
import * as bcrypt from 'bcrypt';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectModel('User') private readonly userModel: Model<User>,
              private configService: ConfigService) {
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username });
  }

  async create(AddUserDTO: AddUserDTO): Promise<any> {
    const returnDb = await this.findOne(AddUserDTO.username);
    if (returnDb) {
      throw new SystemException(ApiErrorCode.REGISTER_FAILED, 'REGISTER_FAILED', HttpStatus.OK);
    }
    const salt: string = bcrypt.genSaltSync(this.configService.get<string>('jwt.saltRounds'));
    const newPassword = bcrypt.hashSync(AddUserDTO.password, salt);
    AddUserDTO.password = newPassword;
    AddUserDTO.salt = salt;
    const addUser = new this.userModel(AddUserDTO);
    const returnUser: User = await addUser.save();

    return { usrename: returnUser.username, admin: returnUser.admin };
  }


}