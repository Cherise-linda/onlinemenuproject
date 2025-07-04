import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  async findOrderByUserAndItem(userId: number, itemId: number) {
    return this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.items', 'item')
      .where('user.id = :userId', { userId })
      .andWhere('item.id = :itemId', { itemId })
      .getMany();
  }
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find({
      relations: ['user', 'items'],
    });
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: { id: id },
      relations: ['user', 'items'],
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update({ id: id }, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepository.delete({ id: id });
  }
}
