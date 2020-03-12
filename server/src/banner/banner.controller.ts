import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { BannerService } from './banner.service';
import { Banner } from './interfaces/banner.interface';
import { SystemException } from '../common/exceptions/system.exception'
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';

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
        throw new SystemException("12345", "文字好", HttpStatus.OK);

        // return this.bannerService.findOne(lang);
    }
}