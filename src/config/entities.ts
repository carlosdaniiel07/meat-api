import { BaseEntity } from 'src/models/base-entity.model';
import { Auth } from 'src/modules/auth/auth.entity';
import { Address } from 'src/modules/order/address.entity';
import { OrderItem } from 'src/modules/order/order-item.entity';
import { Order } from 'src/modules/order/order.entity';
import { Menu } from 'src/modules/restaurants/menu.entity';
import { Restaurant } from 'src/modules/restaurants/restaurant.entity';
import { Review } from 'src/modules/restaurants/review.entity';

export const entities: typeof BaseEntity[] = [
  Auth,
  Restaurant,
  Menu,
  Review,
  Address,
  OrderItem,
  Order,
];
