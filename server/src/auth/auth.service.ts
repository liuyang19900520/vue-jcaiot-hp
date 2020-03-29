import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService,
  ) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && await bcrypt.compareSync(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { admin: user.admin, sub: user.username };
    const accessToken = this.jwtService.sign(payload);
    // const client = await this.redisService.getClient();
    // this.redisService.resolve<any>("access_token", p1, 60000);
    // client.hset("access_token", "access_token", access_token);
    // client.hset("access_token", "admin", user.admin);
    // client.hset("access_token", "usrename", user.username);
    // client.expire('access_token', 6000)
    return {
      accessToken: accessToken,
    };
  }


  async register(user: any) {
    return await this.usersService.create(user);
  }
}