
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { MenuModule } from './menu/menu.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { OrdersModule } from './orders/orders.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Restaurant } from './restaurants/entities/restaurant.entity';
import { Order } from './orders/entities/order.entity';
import { Menu } from './menu/entities/menu.entity';
import { OrderItem } from './order_items/entities/order_item.entity';
import { Item } from './items/entities/item.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'linda',
      database: 'project',
      entities: [User,Restaurant,Order,Menu,OrderItem,Item],
      synchronize: true,
    }),
    ItemsModule,
    MenuModule,
    OrderItemsModule,
    OrdersModule,
    RestaurantsModule,
    UsersModule,
  ],
})
export class AppModule {}

