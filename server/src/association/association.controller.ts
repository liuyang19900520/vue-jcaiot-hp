import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AssociationDto } from './dto/association.dto';
import { AssociationService } from './association.service';
import { Association } from './interfaces/association.interface';
import { Logger } from 'winston';

@Controller('api/associations')
export class AssociationController {
  constructor(private readonly AssociationService: AssociationService, @Inject('winston') private readonly logger: Logger) {
  }

  @Post()
  async create(@Body() associationDto: AssociationDto) {
    await this.AssociationService.create(associationDto);
  }

  @Get()
  async findAll(): Promise<Association[]> {
    return this.AssociationService.findAll();
  }

  @Get(':lang')
  async findOne(@Param('lang') lang: string): Promise<Association> {
    return this.AssociationService.findOne(lang);
  }
}