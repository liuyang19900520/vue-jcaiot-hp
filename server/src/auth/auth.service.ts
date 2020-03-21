import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../cache/redis.service'
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService
    , private readonly redisService: RedisService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && await bcrypt.compareSync(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { admin: user.admin, sub: user.username };
    let access_token = this.jwtService.sign(payload);
    const client = await this.redisService.getClient();
    client.hset("access_token", "access_token", access_token);
    client.hset("access_token", "admin", user.admin);
    client.hset("access_token", "usrename", user.username);
    return {
      access_token: access_token
    };
  }


  async register(user: any) {
    return await this.usersService.create(user);
  }
}