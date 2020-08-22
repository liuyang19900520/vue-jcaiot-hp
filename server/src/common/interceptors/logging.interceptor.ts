import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from 'winston';

export interface Response<T> {
  data: T;
}

@Injectable()
export class LoggingInterceptor<T> implements NestInterceptor<T, Response<T>> {

  constructor(@Inject('winston') private readonly logger: Logger) {
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const now = Date.now();
    this.logger.info('request url:', { 'url': context.switchToHttp().getRequest().url });
    this.logger.info('request method:', { 'method': context.switchToHttp().getRequest().method });
    if (context.switchToHttp().getRequest().method == 'GET' || context.switchToHttp().getRequest().method == 'DELETE') {
      this.logger.info('request params:', context.switchToHttp().getRequest().query);
    } else {
      this.logger.info('request params:', context.switchToHttp().getRequest().body);
    }
    return next
      .handle()
      .pipe(tap((data) => {
          this.logger.info('response data:', { data });
          this.logger.info('response time:', { 'costTime': (Date.now() - now) + 'ms' });
        },
      ));
  }
}
