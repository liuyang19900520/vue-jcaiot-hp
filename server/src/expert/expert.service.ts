import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expert } from './interfaces/expert.interface';
import { ExpertDto } from './dto/expert.dto';

@Injectable()
export class ExpertService {
  constructor(@InjectModel('Expert') private readonly expertModel: Model<Expert>) {
  }

  async create(expertDto: ExpertDto): Promise<Expert> {
    const createdBanner = new this.expertModel(expertDto);
    return null;

  }

  async findAll(): Promise<Expert[]> {
    return this.expertModel.find().exec();
  }

}