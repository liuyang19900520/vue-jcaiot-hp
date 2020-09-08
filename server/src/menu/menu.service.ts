import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from './interfaces/menu.interface';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Expert } from '../expert/interfaces/expert.interface';
import { ExpertDto } from '../expert/dto/expert.dto';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private readonly menuModel: Model<Menu>) {
  }

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const createdMenu = new this.menuModel(createMenuDto);
    return createdMenu.save();
  }

  async listMenu(adminType: string): Promise<Menu[]> {
    return this.menuModel.find({ admin: adminType },null,{sort:{'order':1}});
  }

  async findById(id): Promise<Menu> {
    return await this.menuModel.findOne({ '_id': id });
  }

  async update(expertDto: ExpertDto): Promise<Menu> {
    return this.menuModel.update({ '_id': expertDto._id }, { $set: expertDto });
  }

  async deleteById(id): Promise<any> {
    const content = await this.menuModel.deleteOne({ '_id': id });
    let result = {};
    if (content.deletedCount === 1) {
      result = { 'deleteResult': 'success' };
    } else {
      throw new SystemException(ApiErrorCode.DELETE_ERROR, 'DELETE_ERROR', HttpStatus.OK);
    }
    return result;
  }
}