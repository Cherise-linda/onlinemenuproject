
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, ManyToMany } from "typeorm";
import { Menu } from '../../menu/entities/menu.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column('decimal')
    price: number;
    @ManyToOne(() => Menu, menu => menu.items)
    menu: Menu;
    @ManyToMany(() => Order, order => order.items)
    orders: Order[];
}
