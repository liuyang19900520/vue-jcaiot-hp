import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  // constructor(private readonly redisService: RedisService,
  //     private readonly jwtService: JwtService) { super(); }


  // canActivate(
  //     context: ExecutionContext,
  // ): boolean | Promise<boolean> {
  //     const client = this.redisService.getClient();
  //     const request = context.switchToHttp().getRequest();
  //     let accessToken = request.header('Authorization');


  //     async function checkRedis(accessToken) {
  //         let isRedis = await client.hgetall(accessToken, (err, hash) => {
  //             if (!hash["access_token"]) {
  //                 console.log("there is no data in redis");
  //                 return false;
  //             }
  //             const payload = { admin: hash["admin"], sub: hash["username"] };
  //             let access_token2 = this.jwtService.sign(payload);
  //             client.hset("access_token", "access_token", access_token2);
  //             client.hset("access_token", "admin", payload.admin);
  //             client.hset("access_token", "usrename", payload.sub);
  //             client.expire('access_token', 6000)
  //             console.log(payload);

  //             return true;

  //         });
  //         return isRedis;
  //     }
  //     try {
  //         let playddd = this.jwtService.verify(accessToken);
  //         return true;
  //     }
  //     catch (error) {
  //         checkRedis(accessToken).then((data) => {
  //             return data;
  //         });


  //     }
  // }
}
