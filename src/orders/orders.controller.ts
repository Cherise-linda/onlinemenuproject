import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('user/:user_id/item/:item_id')
  async getOrderByUserAndItem(@Param('user_id') userId: string, @Param('item_id') itemId: string) {
    return this.ordersService.findOrderByUserAndItem(+userId, +itemId);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): any {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(): any {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): any {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.ordersService.remove(+id);
  }
}
