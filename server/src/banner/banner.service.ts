import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Banner } from './interfaces/banner.interface';
import { CreateBannerDto } from './dto/create-banner.dto';

@Injectable()
export class BannerService {
  constructor(@InjectModel('Banner') private readonly bannerModel: Model<Banner>) {
  }

  async update(createBannerDto: CreateBannerDto): Promise<Banner> {
    const result = await this.bannerModel.update({ lang: createBannerDto.lang }, {
      $set: {
        content: createBannerDto.content,
        banner: createBannerDto.banner,
        updateUser:createBannerDto.updateUser,
        updateTime:createBannerDto.updateTime
      },
    });
    return result;
  }

  async findAll(): Promise<Banner[]> {
    return this.bannerModel.find().exec();
  }

  async findOne(lang: string): Promise<Banner> {
    return this.bannerModel.findOne({ lang: lang });
  }
}