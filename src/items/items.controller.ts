import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('menu/:menu_id/order/:order_id')
  async getItemsByMenuAndOrder(@Param('menu_id') menuId: string, @Param('order_id') orderId: string) {
    return this.itemsService.findItemsByMenuAndOrder(+menuId, +orderId);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): any {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll(): any {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto): any {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.itemsService.remove(+id);
  }
}
