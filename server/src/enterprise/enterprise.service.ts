import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Enterprise } from './interfaces/enterprise.interface';
import { EnterpriseDto } from './dto/enterprise.dto';

@Injectable()
export class EnterpriseService {
  constructor(@InjectModel('Enterprise') private readonly enterpriseModel: Model<Enterprise>) {
  }

  async create(enterpriseDto: EnterpriseDto): Promise<Enterprise> {
    const createdBanner = new this.enterpriseModel(enterpriseDto);
    return null;

  }

  async findAll(): Promise<Enterprise[]> {
    return this.enterpriseModel.find().exec();
  }

}