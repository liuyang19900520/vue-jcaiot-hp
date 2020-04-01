import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from './interfaces/menu.interface';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private readonly menuModel: Model<Menu>) {
  }

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const createdMenu = new this.menuModel(createMenuDto);
    return createdMenu.save();
  }

  async findAll(): Promise<Menu[]> {
    return this.menuModel.find().exec();
  }

  async listMenu(adminType: string): Promise<Menu[]> {
    return this.menuModel.find({ admin: adminType });
  }
}