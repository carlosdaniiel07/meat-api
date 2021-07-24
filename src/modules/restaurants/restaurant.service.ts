import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiException } from 'src/models/api-exception.model';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { Menu } from './menu.entity';
import { Restaurant } from './restaurant.entity';
import { Review } from './review.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly repository: Repository<Restaurant>,
    @InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Restaurant> {
    const restaurant = await this.repository.findOne(id);

    if (!restaurant) {
      throw new ApiException(404, 'Restaurante não encontrado');
    }

    return restaurant;
  }

  async findMenuByRestaurant(id: string): Promise<Menu[]> {
    return await this.menuRepository.find({ where: { restaurant: { id } } });
  }

  async findMenuByIds(ids: string[]): Promise<Menu[]> {
    return await this.menuRepository.findByIds(ids);
  }

  async findReviewsByRestaurant(id: string): Promise<Review[]> {
    return await this.reviewRepository.find({ where: { restaurant: { id } } });
  }

  async save(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.repository.save(createRestaurantDto);
  }

  async saveMenu(id: string, createMenuDto: CreateMenuDto): Promise<Menu> {
    return await this.menuRepository.save({
      ...createMenuDto,
      restaurant: await this.findById(id),
    });
  }

  async saveReview(
    id: string,
    createReviewDto: CreateReviewDto,
  ): Promise<Review> {
    const isValidRating = this.isValidRating(createReviewDto.rating);

    if (!isValidRating) {
      throw new ApiException(
        400,
        `A nota dada (${createReviewDto.rating}) não é válida`,
      );
    }

    return await this.reviewRepository.save({
      ...createReviewDto,
      restaurant: await this.findById(id),
    });
  }

  private isValidRating(rating: number): boolean {
    const minValue = 0;
    const maxValue = 5;

    return rating && rating >= minValue && rating <= maxValue;
  }
}
