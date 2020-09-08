import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuService } from './menu.service';
import { Menu } from './interfaces/menu.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ExpertDto } from '../expert/dto/expert.dto';

@Controller('api/menus')
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

  @Get(':id')
  async findPostById(@Param('id') id): Promise<any> {
    const result = this.menuService.findById(id);
    return result;
  }

  @Put()
  async update(@Body() expertDto: ExpertDto) {
    await this.menuService.update(expertDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<any> {
    const result = await this.menuService.deleteById(id);
    return result;
  }
}