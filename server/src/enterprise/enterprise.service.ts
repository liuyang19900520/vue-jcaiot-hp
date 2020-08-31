import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Enterprise } from './interfaces/enterprise.interface';
import { EnterpriseDto } from './dto/enterprise.dto';
import { Association } from '../association/interfaces/association.interface';
import { AssociationDto } from '../association/dto/association.dto';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class EnterpriseService {
  constructor(@InjectModel('Enterprise') private readonly enterpriseModel: Model<Enterprise>) {
  }

  async create(enterpriseDto: EnterpriseDto): Promise<Enterprise> {
    const createEnterprise = new this.enterpriseModel(enterpriseDto);
    return createEnterprise.save();

  }

  async findAll(): Promise<Enterprise[]> {
    return this.enterpriseModel.find().exec();
  }

  async findById(id): Promise<Association> {
    return await this.enterpriseModel.findOne({ '_id': id });
  }

  async update(enterpriseDto: EnterpriseDto): Promise<Association> {
    return this.enterpriseModel.update({ '_id': enterpriseDto._id }, { $set: enterpriseDto });
  }

  async deleteById(id): Promise<any> {
    const content = await this.enterpriseModel.deleteOne({ '_id': id });
    let result = {};
    if (content.deletedCount === 1) {
      result = { 'deleteResult': 'success' };
    } else {
      throw new SystemException(ApiErrorCode.DELETE_ERROR, 'DELETE_ERROR', HttpStatus.OK);
    }
    return result;
  }

}