import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonWebTokenError } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { RedisService } from '../cache/redis.service'
import { JwtService } from '@nestjs/jwt';
import { async } from 'rxjs/internal/scheduler/async';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor(private readonly redisService: RedisService,
        private readonly jwtService: JwtService) { super(); }

    canActivate(
        context: ExecutionContext,
    ): boolean {
        const request = context.switchToHttp().getRequest();
        let accessToken = request.header('Authorization');
        try {
            let playddd = this.jwtService.verify(accessToken);
            return true;
        }
        catch (error) {

            if (error instanceof JsonWebTokenError) {
                console.log(error);
                const client = this.redisService.getClient();

                const getHash = async () => {
                    return await client.hgetall(accessToken)
                }

                let hash = getHash();
                console.log(hash);
                if (!hash["access_token"]) {
                    console.log("there is no data in redis");
                    throw new UnauthorizedException();

                }
                const payload = { admin: hash["admin"], sub: hash["username"] };
                let access_token2 = this.jwtService.sign(payload);
                console.log(payload);

                // getHash().then(
                //     (hash) => {


                //     }
                // );


            }

        }

        return true;

    }

}
