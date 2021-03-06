import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';

import { Restaurant } from './restaurant.entity';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantService } from './restaurant.service';
import { Review } from './review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Menu, Review])],
  controllers: [RestaurantsController],
  providers: [RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantsModule {}
