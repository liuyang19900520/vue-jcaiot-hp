import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { EnterpriseDto } from './dto/enterprise.dto';
import { EnterpriseService } from './enterprise.service';
import { Enterprise } from './interfaces/enterprise.interface';
import { Logger } from 'winston';

@Controller('api/enterprises')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService, @Inject('winston') private readonly logger: Logger) {
  }

  @Post()
  async create(@Body() enterpriseDto: EnterpriseDto) {
    await this.enterpriseService.create(enterpriseDto);
  }

  @Get()
  async findAll(): Promise<Enterprise[]> {
    return this.enterpriseService.findAll();
  }

  @Get(':id')
  async findPostById(@Param('id') id): Promise<any> {
    const result = this.enterpriseService.findById(id);
    return result;
  }

  @Put()
  async update(@Body() enterpriseDto: EnterpriseDto) {
    await this.enterpriseService.update(enterpriseDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<any> {
    const result = await this.enterpriseService.deleteById(id);
    return result;
  }

}