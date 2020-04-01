import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuService } from './menu.service';
import { Menu } from './interfaces/menu.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {
  }

  @Post()
  async create(@Body() createCatDto: CreateMenuDto) {
    await this.menuService.create(createCatDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listMenu(@Request() req): Promise<Menu[]> {
    const admin = req.user.admin;
    return this.menuService.listMenu(admin);
  }


}