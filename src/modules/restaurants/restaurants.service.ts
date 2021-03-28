import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiException } from 'src/models/api-exception.model';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(@InjectRepository(Restaurant)private readonly repository: Repository<Restaurant>) {
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.repository.find()
  }

  async findById(id: string): Promise<Restaurant> {
    const restaurant = await this.repository.findOne(id);

    if (!restaurant) {
      throw new ApiException(404, 'Restaurante não encontrado');
    }

    return restaurant;
  }

  async save(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.repository.save(createRestaurantDto);
  }
}
