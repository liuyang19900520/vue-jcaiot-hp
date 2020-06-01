declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as winston from 'winston'
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }), new winston.transports.File({ filename: './logs/debug.log', level: 'warn' }),
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/info.log', level: 'info' })
        // other transports...
      ],
      // options (same as WinstonModule.forRoot() options)
    })
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.useGlobalFilters(new HttpExceptionFilter(app.get(WINSTON_MODULE_NEST_PROVIDER)));
  app.useGlobalInterceptors(new TransformInterceptor);
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
