import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { RedisService } from '../cache/redis.service'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor() { super(); }
    private readonly redisService: RedisService;
    private readonly jwtService: JwtService;
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        let accessToken = request.header('Authorization');
        console.log(accessToken);
        try {
            super.canActivate(context);
        } catch (error) {
            if (error instanceof UnauthorizedException) {
                const client = this.redisService.getClient();
                let redisData = client.hgetall(accessToken);
                console.log(JSON.stringify(redisData));
                const payload = { admin: redisData["admin"], sub: redisData["username"] };
                let access_token = this.jwtService.sign(payload);


            } else {
                throw error;
            }

        }


        return true;
    }

}
