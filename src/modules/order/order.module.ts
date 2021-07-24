import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), RestaurantsModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
