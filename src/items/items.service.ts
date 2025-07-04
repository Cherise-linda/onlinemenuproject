import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async findItemsByMenuAndOrder(menuId: number, orderId: number) {
    return this.itemRepository.find({
      where: {
        menu: { id: menuId },
        orders: { id: orderId },
      },
      relations: ['menu', 'orders'],
    });
  }

  create(createItemDto: CreateItemDto) {
    const item = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(item);
  }

  findAll() {
    return this.itemRepository.find({
      relations: ['menu', 'orders'],
    });
  }

  findOne(id: number) {
    return this.itemRepository.findOne({
      where: { id: id },
      relations: ['menu', 'orders'],
    });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update({ id: id }, updateItemDto);
  }

  remove(id: number) {
    return this.itemRepository.delete({ id: id });
  }
}
