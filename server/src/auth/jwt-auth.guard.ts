import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { RedisService } from '../cache/redis.service'
import { json } from 'express';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor() { super(); }
    private readonly redisService: RedisService
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

            } else {
                throw error;
            }

        }


        return true;
    }

}
