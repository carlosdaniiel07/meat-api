import { BaseEntity } from 'src/models/base-entity.model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Entity()
export class Review extends BaseEntity {
  @Column({
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'numeric',
    nullable: false,
  })
  rating: number;

  @ManyToOne(
    () => Restaurant,
    restaurant => restaurant.reviews,
    {
      eager: false,
      nullable: false,
    },
  )
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant;
}
