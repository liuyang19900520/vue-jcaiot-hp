import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { BannerModule } from './banner/banner.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';


@Module({
  imports: [
    // RedisModule.register({
    //   host: '192.168.0.16',
    //   port: 6379
    // }),
    MongooseModule.forRoot('mongodb+srv://liuyang19900520:1990052099@jcaiot-3aplq.mongodb.net/jcaiot?retryWrites=true&w=majority'),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }), new winston.transports.File({
          filename: './logs/warn.log', level: 'warn', format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new winston.transports.File({
          filename: './logs/error.log', level: 'error', format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new winston.transports.File({
          filename: './logs/info.log', level: 'info', format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        // other transports...
      ],
      // options
    }),
    BannerModule, AuthModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
