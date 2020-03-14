import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from '../auth/constants';
import { User } from 'src/users/users.schema';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const hash = bcrypt.hashSync(pass, user.salt);

    if (user && await bcrypt.compareSync(user.password, hash)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { admin: user.admin, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  async register(user: any) {
    return await this.usersService.create(user);
  }
}