import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
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

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Restaurant> {
    return await this.service.findById(id);
  }

  @Post()
  async save(@Body() createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.service.save(createRestaurantDto);
  }
}
