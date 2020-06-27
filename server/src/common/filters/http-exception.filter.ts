import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Inject, UnauthorizedException } from '@nestjs/common';
import { SystemException } from '../exceptions/system.exception';
import { Logger } from 'winston';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter<Error> {
  constructor(@Inject('winston') private readonly logger: Logger) {
  }

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
            path: request.url,
          },
        });
    } else if (exception instanceof UnauthorizedException) {
      response
        .status(status)
        .json({
          code: '1',
          message: exception.message,
          data: {
            date: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
            path: request.url,
          },
        });
    } else {
      response
        .status(status)
        .json({
          code: '1',
          message: exception.message,
          data: {
            date: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
            path: request.url,
          },
        });
    }
  }

}