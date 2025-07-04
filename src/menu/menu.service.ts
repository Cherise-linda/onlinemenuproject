
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    const menu = this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(menu);
  }

  findAll() {
    return this.menuRepository.find({
      relations: ['restaurant', 'items'],
    });
  }

  findOne(id: number) {
    return this.menuRepository.findOne({
      where: { id: id },
      relations: ['restaurant', 'items'],
    });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.menuRepository.update({ id: id }, updateMenuDto);
  }

  remove(id: number) {
    return this.menuRepository.delete({ id: id });
  }
  
  async findMenusByRestaurantAndItem(restaurantId: number, itemId: number) {
    return this.menuRepository.find({
      where: {
        restaurant: { id: restaurantId },
        items: { id: itemId },
      },
      relations: ['restaurant', 'items'],
    });
  }
}
