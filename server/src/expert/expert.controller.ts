import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ExpertDto } from './dto/expert.dto';
import { ExpertService } from './expert.service';
import { Expert } from './interfaces/expert.interface';
import { Logger } from 'winston';

@Controller('api/experts')
export class ExpertController {
  constructor(private readonly ExpertService: ExpertService, @Inject('winston') private readonly logger: Logger) {
  }

  @Post()
  async create(@Body() expertDto: ExpertDto) {
    await this.ExpertService.create(expertDto);
  }

  @Get()
  async findAll(): Promise<Expert[]> {
    return this.ExpertService.findAll();
  }

}