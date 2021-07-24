import { BaseEntity } from 'src/models/base-entity.model';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Address extends BaseEntity {
  @Column({
    name: 'street',
    length: 100,
    nullable: false,
  })
  street: string;

  @Column({
    name: 'number',
    length: 10,
    nullable: false,
  })
  number: string;

  @Column({
    name: 'complement',
    length: 255,
    nullable: true,
  })
  complement: string;

  @OneToOne(
    () => Order,
    order => order.deliveryAddress,
    {
      eager: false,
      nullable: false,
    },
  )
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
