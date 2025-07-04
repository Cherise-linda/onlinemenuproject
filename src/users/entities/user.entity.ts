import { Column, PrimaryGeneratedColumn, Check, Entity, OneToMany } from "typeorm";
import { Order } from '../../orders/entities/order.entity';

@Entity()
@Check(`"role" IN ('admin', 'manager', 'customer', 'staff')`)
export class User {
    @PrimaryGeneratedColumn()
    userId: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    phonenumber: string;
    @Column({ default: 'customer' })
    role: 'admin' | 'manager' | 'customer' | 'staff';
    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
