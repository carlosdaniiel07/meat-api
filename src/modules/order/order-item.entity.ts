import { BaseEntity } from 'src/models/base-entity.model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Menu } from '../restaurants/menu.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem extends BaseEntity {
  @Column({
    name: 'quantity',
    type: 'smallint',
    nullable: false,
  })
  quantity: number;

  @ManyToOne(() => Menu, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: Menu;

  @ManyToOne(
    () => Order,
    order => order.items,
    {
      eager: false,
      nullable: false,
    },
  )
  @JoinColumn({ name: 'order_id' })
  order?: Order;
}
