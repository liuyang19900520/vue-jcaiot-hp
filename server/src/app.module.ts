import { Module } from '@nestjs/common';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import expressConfig from './config/express.config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { BannerModule } from './banner/banner.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { PostModule } from './post/post.module';
import { AssociationModule } from './association/association.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { ExpertModule } from './expert/expert.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApplicationUserModule } from './applications/application.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.development'],
      isGlobal: true,
      load: [databaseConfig, jwtConfig, expressConfig],
    }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      //import configService for env parameters
      useFactory: (configService: ConfigService) => ({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
          new winston.transports.File({
            filename: configService.get<string>('express.infoPath'), level: 'info', format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
          new winston.transports.File({
            filename: configService.get<string>('express.warnPath'), level: 'warn', format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
          new winston.transports.File({
            filename: configService.get<string>('express.errorPath'), level: 'error', format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
          // other transports...
        ],
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
      }),
      inject: [ConfigService],
    }),
    BannerModule, AuthModule, MenuModule, PostModule, AssociationModule, EnterpriseModule, ExpertModule, ApplicationUserModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})

export class AppModule {
}
