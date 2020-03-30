import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MenuSchema } from './schemas/menu.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}