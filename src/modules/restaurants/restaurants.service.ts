import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(@InjectRepository(Restaurant)private readonly repository: Repository<Restaurant>) {
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.repository.find()
  }
}
