import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
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

  @Get(':id')
  async findPostById(@Param('id') id): Promise<any> {
    const result = this.AssociationService.findById(id);
    return result;
  }

  @Put()
  async update(@Body() associationDto: AssociationDto) {
    await this.AssociationService.update(associationDto);
  }

  @Delete(':id')
  async deletePostById(@Param('id') id): Promise<any> {
    const result = await this.AssociationService.deleteById(id);
    return result;
  }
}