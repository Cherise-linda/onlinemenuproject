import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order_item.entity';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
  ) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    const orderItem = this.orderItemRepository.create(createOrderItemDto);
    return this.orderItemRepository.save(orderItem);
  }

  findAll() {
    return this.orderItemRepository.find();
  }

  findOne(id: number) {
    return this.orderItemRepository.findOneBy({ orderItemId: id });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemRepository.update({ orderItemId: id }, updateOrderItemDto);
  }

  remove(id: number) {
    return this.orderItemRepository.delete({ orderItemId: id });
  }

  async findOrderItemByOrderAndItem(orderId: number, itemId: number) {
    return this.orderItemRepository.find({
      where: {
        orderId: orderId,
        itemId: itemId,
      },
    });
  }
}
