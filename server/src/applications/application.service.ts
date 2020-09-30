import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Application } from './interfaces/application.interface';
import { ApplicationDto } from './dto/application.dto';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class ApplicationService {
  constructor(@InjectModel('Application') private readonly associationModel: Model<Application>) {
  }

  async create(associationDto: ApplicationDto): Promise<Application> {
    const createdAssociation = new this.associationModel(associationDto);
    return createdAssociation.save();

  }

  async findAll(): Promise<Application[]> {
    return await this.associationModel.find().exec();
  }

  async findById(id): Promise<Application> {
    return await this.associationModel.findOne({ '_id': id });
  }

  async update(associationDto: ApplicationDto): Promise<Application> {
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