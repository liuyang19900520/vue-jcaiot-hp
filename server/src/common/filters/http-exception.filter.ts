import { ArgumentsHost, Catch, ExceptionFilter, HttpException, UnauthorizedException, Inject } from '@nestjs/common';
import { SystemException } from '../exceptions/system.exception';
import { ApiErrorCode } from '../exceptions/api-error-code';
import { Logger } from 'winston';
import { RedisService } from '../../cache/redis.service'
import { JwtService } from '@nestjs/jwt';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter<Error> {
  constructor(@Inject('winston') private readonly logger: Logger) { }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = 500;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
    }
    if (status != 500) {
      this.logger.warn(exception);
    } else {
      this.logger.error(exception);
    }
    if (exception instanceof SystemException) {
      response
        .status(status)
        .json({
          code: exception.getErrorCode(),
          message: exception.getErrorMessage(),
          data: {
            date: new Date().toLocaleDateString() + new Date().toLocaleTimeString,
            path: request.url
          }
        });
    } else if (exception instanceof UnauthorizedException) {

      // let x = super.canActivate(context);
      // console.log(x);

      // const request = context.switchToHttp().getRequest();
      // let accessToken = request.header('Authorization');
      // const client = this.redisService.getClient();
      // let redisData = client.hgetall(accessToken);
      // console.log(redisData);
      // const payload = { admin: redisData["admin"], sub: redisData["username"] };
      // let access_token = this.jwtService.sign(payload);




      response
        .status(status)
        .json({
          code: ApiErrorCode.TOKEN_INVALID,
          message: "TOKEN_INVALID",
          data: {
            date: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
            path: request.url
          }
        });
    }
    else {
      response
        .status(status)
        .json({
          code: "1",
          message: exception.message,
          data: {
            date: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
            path: request.url
          }
        });
    }
  }

}