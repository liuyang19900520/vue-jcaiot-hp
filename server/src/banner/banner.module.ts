import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';
import { BannerSchema } from './schemas/banner.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Banner', schema: BannerSchema }])],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}