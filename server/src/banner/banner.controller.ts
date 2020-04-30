import { Controller, Get, Post, Body, Param, HttpStatus, Inject } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { BannerService } from './banner.service';
import { Banner } from './interfaces/banner.interface';
import { SystemException } from '../common/exceptions/system.exception'
import { Logger } from 'winston';
@Controller('banners')
export class BannerController {
    constructor(private readonly bannerService: BannerService, @Inject('winston') private readonly logger: Logger) { }

    @Post()
    async create(@Body() createCatDto: CreateBannerDto) {
        await this.bannerService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Banner[]> {
        this.logger.error("teset");
        return this.bannerService.findAll();
    }

    @Get(':lang')
    async findOne(@Param('lang') lang: string): Promise<Banner> {
        return this.bannerService.findOne(lang);
    }
}