import { Controller, Get } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  
  constructor(private readonly service: RestaurantsService) {
  }

  @Get()
  async getAll(): Promise<Restaurant[]> {
    return this.service.findAll()
  }
}
