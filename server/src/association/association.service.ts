import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Association } from './interfaces/association.interface';
import { AssociationDto } from './dto/association.dto';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class AssociationService {
  constructor(@InjectModel('Association') private readonly associationModel: Model<Association>) {
  }

  async create(associationDto: AssociationDto): Promise<Association> {
    const createdAssociation = new this.associationModel(associationDto);
    return createdAssociation.save();

  }

  async findAll(): Promise<Association[]> {
    return await this.associationModel.find().exec();
  }

  async findById(id): Promise<Association> {
    return await this.associationModel.findOne({ '_id': id });
  }

  async update(associationDto: AssociationDto): Promise<Association> {
    return this.associationModel.update({ '_id': associationDto._id }, { $set: associationDto });
  }

  async deleteById(id): Promise<any> {
    const content = await this.associationModel.deleteOne({ '_id': id });
    let result = {};
    if (content.deletedCount === 1) {
      result = { 'deleteResult': 'success' };
    } else {
      throw new SystemException(ApiErrorCode.DELETE_ERROR, 'DELETE_ERROR', HttpStatus.OK);
    }
    return result;
  }

}