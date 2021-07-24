import { BaseEntity } from 'src/models/base-entity.model';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { Address } from './address.entity';
import { OrderItem } from './order-item.entity';
import { PaymentMethod } from './payment-method.enum';

@Entity()
export class Order extends BaseEntity {
  @OneToOne(
    () => Address,
    address => address.order,
    {
      eager: true,
      cascade: ['insert', 'remove', 'soft-remove'],
    },
  )
  deliveryAddress: Address;

  @Column({
    name: 'payment_method',
    length: 30,
    nullable: false,
  })
  paymentMethod: PaymentMethod;

  @OneToMany(
    () => OrderItem,
    orderItem => orderItem.order,
    {
      eager: true,
      cascade: ['insert', 'remove', 'soft-remove'],
    },
  )
  items: OrderItem[];

  @Column({
    name: 'total',
    type: 'numeric',
    nullable: false,
  })
  total: number;
}
