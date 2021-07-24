import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/models/base-entity.model';
import { Menu } from './menu.entity';
import { Review } from './review.entity';

@Entity()
export class Restaurant extends BaseEntity {
  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    length: 200,
  })
  description: string;

  @Column({
    length: 80,
    nullable: false,
    name: 'opening_hours',
  })
  openingHours: string;

  @Column({
    length: 30,
    nullable: false,
  })
  category: string;

  @Column({
    length: 20,
    nullable: false,
  })
  deliveryDelay: string;

  @Column({
    nullable: false,
    type: 'numeric',
  })
  rating: number;

  @Column({
    length: 200,
    nullable: false,
    name: 'image_path',
  })
  imagePath: string;

  @OneToMany(
    () => Menu,
    menu => menu.restaurant,
    {
      eager: false,
    },
  )
  menu: Menu[];

  @OneToMany(
    () => Review,
    review => review.restaurant,
    {
      eager: false,
    },
  )
  reviews: Review[];
}
