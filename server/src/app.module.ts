import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerModule } from './banner/banner.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://liuyang19900520:1990052099@jcaiot-3aplq.mongodb.net/jcaiot?retryWrites=true&w=majority'),
    BannerModule, AuthModule
  ],
})
export class AppModule { }
