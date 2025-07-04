import { IsIn, IsString } from 'class-validator';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  @IsString()
  @IsIn(['admin', 'manager', 'customer', 'staff'], { message: 'role must be one of: admin, manager, customer, staff' })
  role: 'admin' | 'manager' | 'customer' | 'staff';
}
