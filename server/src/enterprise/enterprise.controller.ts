import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
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

}