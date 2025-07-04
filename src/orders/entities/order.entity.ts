
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Item } from '../../items/entities/item.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string;
    @Column('decimal')
    total: number;
    @Column()
    createdAt: Date;
    @ManyToOne(() => User, user => user.orders)
    user: User;
    @ManyToMany(() => Item, item => item.orders)
    @JoinTable()
    items: Item[];
}
