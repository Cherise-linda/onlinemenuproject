
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    orderItemId: number;

    @Column()
    orderId: number;

    @Column()
    itemId: number;

    @Column()
    quantity: number;

    @Column('decimal')
    price: number
}
