import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { Menu } from './menu.entity';
import { Restaurant } from './restaurant.entity';
import { RestaurantsService } from './restaurants.service';
import { Review } from './review.entity';

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

  @Get(':id/reviews')
  async getReviews(@Param('id') id: string): Promise<Review[]> {
    return await this.service.findReviewsByRestaurant(id)
  }

  @Post(':id/reviews')
  async saveReview(@Param('id') id: string, @Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return await this.service.saveReview(id, createReviewDto)
  }

  @Get(':id/menu')
  async getMenu(@Param('id') id: string): Promise<Menu[]> {
    return await this.service.findMenuByRestaurant(id)
  }

  @Post(':id/menu')
  async saveMenu(@Param('id') id: string, @Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return await this.service.saveMenu(id, createMenuDto)
  }

  @Post()
  async save(@Body() createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.service.save(createRestaurantDto);
  }
}
