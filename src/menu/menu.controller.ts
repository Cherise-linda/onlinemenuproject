import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto): any {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll(): any {
    return this.menuService.findAll();
  }

  @Get('restaurant/:restaurant_id/item/:item_id')
  async getMenusByRestaurantAndItem(@Param('restaurant_id') restaurantId: string, @Param('item_id') itemId: string) {
    return this.menuService.findMenusByRestaurantAndItem(+restaurantId, +itemId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto): any {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.menuService.remove(+id);
  }
}
