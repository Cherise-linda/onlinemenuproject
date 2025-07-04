import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByOrder(orderId: number) {
    return this.userRepository.find({
      where: {
        orders: { id: orderId },
      },
      relations: ['orders'],
    });
  }

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({
      relations: ['orders'],
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { userId: id },
      relations: ['orders'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ userId: id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ userId: id });
  }
}
