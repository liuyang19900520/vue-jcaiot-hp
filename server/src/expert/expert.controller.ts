import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ExpertDto } from './dto/expert.dto';
import { ExpertService } from './expert.service';
import { Expert } from './interfaces/expert.interface';
import { Logger } from 'winston';

@Controller('api/experts')
export class ExpertController {
  constructor(private readonly expertService: ExpertService, @Inject('winston') private readonly logger: Logger) {
  }

  @Post()
  async create(@Body() expertDto: ExpertDto) {
    await this.expertService.create(expertDto);
  }

  @Get()
  async findAll(): Promise<Expert[]> {
    return this.expertService.findAll();
  }

  @Get(':id')
  async findPostById(@Param('id') id): Promise<any> {
    const result = this.expertService.findById(id);
    return result;
  }

  @Put()
  async update(@Body() expertDto: ExpertDto) {
    await this.expertService.update(expertDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<any> {
    const result = await this.expertService.deleteById(id);
    return result;
  }

}