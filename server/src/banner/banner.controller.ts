import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { BannerService } from './banner.service';
import { Banner } from './interfaces/banner.interface';

@Controller('banners')
export class BannerController {
    constructor(private readonly bannerService: BannerService) { }

    @Post()
    async create(@Body() createCatDto: CreateBannerDto) {
        await this.bannerService.create(createCatDto);
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