import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Banner } from './interfaces/banner.interface';
import { CreateBannerDto } from './dto/create-banner.dto';

@Injectable()
export class BannerService {
  constructor(@InjectModel('Banner') private readonly bannerModel: Model<Banner>) {
  }

  async create(createBannerDto: CreateBannerDto): Promise<Banner> {
    const createdBanner = new this.bannerModel(createBannerDto);
    return this.bannerModel.update({ lang: createdBanner.lang }, {
      $set: {
        content: createdBanner.content,
        banner: createdBanner.banner,
      },
    });
  }

  async findAll(): Promise<Banner[]> {
    return this.bannerModel.find().exec();
  }

  async findOne(lang: string): Promise<Banner> {
    return this.bannerModel.findOne({ lang: lang });
  }
}