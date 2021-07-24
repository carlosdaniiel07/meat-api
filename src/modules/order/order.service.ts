import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiException } from 'src/models/api-exception.model';
import { Repository } from 'typeorm';
import { RestaurantService } from '../restaurants/restaurant.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderItem } from './order-item.entity';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly repository: Repository<Order>,
    private readonly restaurantService: RestaurantService,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Order> {
    return await this.repository.findOne(id);
  }

  async save(createOrderDto: CreateOrderDto): Promise<Order> {
    const { deliveryAddress, items } = createOrderDto;
    const products = await this.restaurantService.findMenuByIds(
      items.map(orderItem => orderItem.product),
    );
    const orderItems: OrderItem[] = items.map(orderItem => {
      const product = products.find(
        product => product.id === orderItem.product,
      );

      if (!product) {
        throw new ApiException(404, `O item ${orderItem.product} não existe`);
      }

      return {
        product,
        quantity: orderItem.quantity,
      };
    });

    return await this.repository.save({
      deliveryAddress,
      items: orderItems,
      paymentMethod: createOrderDto.paymentMethod,
      total: orderItems
        .map(this.getOrderItemTotal)
        .reduce((total, current) => total + current, 0),
    });
  }

  private getOrderItemTotal(orderItem: OrderItem): number {
    return (orderItem.product?.price ?? 0) * orderItem.quantity;
  }
}
