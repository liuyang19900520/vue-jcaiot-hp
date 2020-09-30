import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApplicationDto } from './dto/application.dto';
import { ApplicationService } from './application.service';
import { Application } from './interfaces/application.interface';
import { Logger } from 'winston';

@Controller('api/applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService, @Inject('winston') private readonly logger: Logger) {
  }

  @Post()
  async create(@Body() associationDto: ApplicationDto) {
    await this.applicationService.create(associationDto);
  }

  @Get()
  async findAll(): Promise<Application[]> {
    return this.applicationService.findAll();
  }

  @Get(':id')
  async findPostById(@Param('id') id): Promise<any> {
    const result = this.applicationService.findById(id);
    return result;
  }

  @Put()
  async update(@Body() associationDto: ApplicationDto) {
    await this.applicationService.update(associationDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<any> {
    const result = await this.applicationService.deleteById(id);
    return result;
  }
}