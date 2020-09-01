import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expert } from './interfaces/expert.interface';
import { ExpertDto } from './dto/expert.dto';
import { Association } from '../association/interfaces/association.interface';
import { AssociationDto } from '../association/dto/association.dto';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class ExpertService {
  constructor(@InjectModel('Expert') private readonly expertModel: Model<Expert>) {
  }

  async create(expertDto: ExpertDto): Promise<Expert> {
    const expert = new this.expertModel(expertDto);
    return expert.save();

  }

  async findAll(): Promise<Expert[]> {
    return this.expertModel.find().exec();
  }

  async findById(id): Promise<Expert> {
    return await this.expertModel.findOne({ '_id': id });
  }

  async update(expertDto: ExpertDto): Promise<Expert> {
    return this.expertModel.update({ '_id': expertDto._id }, { $set: expertDto });
  }

  async deleteById(id): Promise<any> {
    const content = await this.expertModel.deleteOne({ '_id': id });
    let result = {};
    if (content.deletedCount === 1) {
      result = { 'deleteResult': 'success' };
    } else {
      throw new SystemException(ApiErrorCode.DELETE_ERROR, 'DELETE_ERROR', HttpStatus.OK);
    }
    return result;
  }

}