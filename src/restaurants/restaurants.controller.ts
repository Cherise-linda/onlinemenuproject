import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto): any {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  findAll(): any {
    return this.restaurantsService.findAll();
  }

  @Get('menu/:menu_id')
  async getRestaurantByMenu(@Param('menu_id') menuId: string) {
    return this.restaurantsService.findRestaurantByMenu(+menuId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.restaurantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto): any {
    return this.restaurantsService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.restaurantsService.remove(+id);
  }
}
