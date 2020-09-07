import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { BannerService } from './banner.service';
import { Banner } from './interfaces/banner.interface';
import { Logger } from 'winston';

@Controller('api/banners')
export class BannerController {
  constructor(private readonly bannerService: BannerService, @Inject('winston') private readonly logger: Logger) {
  }

  @Post()
  async update(@Body() createCatDto: CreateBannerDto) {
    await this.bannerService.update(createCatDto);
  }

  @Get()
  async findAll(): Promise<Banner[]> {
    return this.bannerService.findAll();
  }

  @Get(':lang')
  async findOne(@Param('lang') lang: string): Promise<Banner> {
    return this.bannerService.findOne(lang);
  }
}