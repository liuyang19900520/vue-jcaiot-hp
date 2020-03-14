import { ArgumentsHost, Catch, ExceptionFilter, HttpException, UnauthorizedException } from '@nestjs/common';
import { SystemException } from '../exceptions/system.exception';
import { ApiErrorCode } from '../exceptions/api-error-code';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter<Error> {

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = 500;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
    }
    console.log(exception);

    if (exception instanceof SystemException) {
      response
        .status(status)
        .json({
          code: exception.getErrorCode(),
          message: exception.getErrorMessage(),
          data: {
            date: new Date().toLocaleDateString(),
            path: request.url
          }
        });
    } else if (exception instanceof UnauthorizedException) {
      response
        .status(status)
        .json({
          code: ApiErrorCode.TOKEN_INVALID,
          message: "TOKEN_INVALID",
          data: {
            date: new Date().toLocaleDateString(),
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
            date: new Date().toLocaleDateString(),
            path: request.url
          }
        });
    }
  }

}