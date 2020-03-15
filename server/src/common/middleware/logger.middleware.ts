import { Injectable, Inject, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'winston';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(@Inject('winston') private readonly logger: Logger) { }
    use(req: Request, res: Response, next: Function) {
        this.logger.info('Request...');
        this.logger.info(req.url);
        this.logger.info(req.params)
        next();
    }
}