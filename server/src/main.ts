import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ConfigService } from '@nestjs/config';

declare const module: any;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.useGlobalInterceptors(new TransformInterceptor);
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  await app.listen(configService.get<string>('express.port'));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
};

bootstrap();
