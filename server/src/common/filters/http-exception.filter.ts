import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { SystemException } from '../exceptions/system.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()

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

    } else {

      response
        .status(status)
        .json({
          code: "1",
          message: "request failed",
          data: {
            date: new Date().toLocaleDateString(),
            path: request.url
          }
        });
    }
  }

}