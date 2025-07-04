import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  findAll() {
    return this.restaurantRepository.find({
      relations: ['menus'],
    });
  }

  async findRestaurantByMenu(menuId: number) {
    return this.restaurantRepository.find({
      where: {
        menus: { id: menuId },
      },
      relations: ['menus'],
    });
  }

  create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = this.restaurantRepository.create(createRestaurantDto);
    return this.restaurantRepository.save(restaurant);
  }

  findOne(id: number) {
    return this.restaurantRepository.findOne({
      where: { id: id },
      relations: ['menus'],
    });
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantRepository.update({ id: id }, updateRestaurantDto);
  }

  remove(id: number) {
    return this.restaurantRepository.delete({ id: id });
  }
}
