import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto): any {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  findAll(): any {
    return this.orderItemsService.findAll();
  }

  @Get('order/:order_id/item/:item_id')
  async getOrderItemByOrderAndItem(@Param('order_id') orderId: string, @Param('item_id') itemId: string) {
    return this.orderItemsService.findOrderItemByOrderAndItem(+orderId, +itemId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.orderItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto): any {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.orderItemsService.remove(+id);
  }
}
