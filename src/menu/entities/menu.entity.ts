
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";
import { Restaurant } from '../../restaurants/entities/restaurant.entity';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(() => Restaurant, restaurant => restaurant.menus)
    restaurant: Restaurant;
    @OneToMany(() => Item, item => item.menu)
    items: Item[];
}
