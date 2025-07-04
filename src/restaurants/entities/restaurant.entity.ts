
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import { Menu } from '../../menu/entities/menu.entity';

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    location: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @OneToMany(() => Menu, menu => menu.restaurant)
    menus: Menu[];
}
