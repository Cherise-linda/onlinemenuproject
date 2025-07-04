import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): any {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): any {
    return this.usersService.findAll();
  }

  @Get('order/:order_id')
  async getUserByOrder(@Param('order_id') orderId: string) {
    return this.usersService.findUserByOrder(+orderId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): any {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.usersService.remove(+id);
  }
}
