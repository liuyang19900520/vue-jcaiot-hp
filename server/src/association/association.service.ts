import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Association } from './interfaces/association.interface';
import { AssociationDto } from './dto/association.dto';
import { PostDocument } from '../post/interfaces/post.interface';

@Injectable()
export class AssociationService {
  constructor(@InjectModel('Association') private readonly associationModel: Model<Association>) {
  }

  async create(associationDto: AssociationDto): Promise<Association> {
    const createdBanner = new this.associationModel(associationDto);
    return null;

  }

  async findAll(): Promise<Association[]> {
    return await this.associationModel.find().exec();
  }

  async findById(id): Promise<PostDocument> {
    const content = await this.associationModel.findOne({ '_id': id });
    return content;
  }

}