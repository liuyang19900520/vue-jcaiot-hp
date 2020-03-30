import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuService } from './menu.service';
import { Menu } from './interfaces/menu.interface';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {
  }

  @Post()
  async create(@Body() createCatDto: CreateMenuDto) {
    await this.menuService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':lang')
  async findOne(@Param('lang') lang: string): Promise<Menu> {
    return this.menuService.findOne(lang);
  }
}