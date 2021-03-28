import { BaseEntity } from "src/models/base-entity.model"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Restaurant } from "./restaurant.entity"

@Entity()
export class Menu extends BaseEntity {
  @Column({
    length: 50,
    nullable: false,
  })
  name: string

  @Column({
    length: 100,
    nullable: false,
  })
  description: string

  @Column({
    name: 'image_path',
    length: 100,
    nullable: false,
  })
  imagePath: string

  @Column({
    type: 'numeric',
    nullable: false,
  })
  price: number

  @ManyToOne(() => Restaurant, restaurant => restaurant.menu, {
    eager: false,
    nullable: false,
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant
}