import { BaseEntity } from "src/models/base-entity.model";
import { Auth } from "src/modules/auth/auth.entity";
import { Menu } from "src/modules/restaurants/menu.entity";
import { Restaurant } from "src/modules/restaurants/restaurant.entity";
import { Review } from "src/modules/restaurants/review.entity";

export const entities: typeof BaseEntity[] = [
  Auth,
  Restaurant,
  Menu,
  Review,
]
