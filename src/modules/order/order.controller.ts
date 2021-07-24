import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Get()
  async list(): Promise<Order[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Order> {
    return await this.service.findById(id);
  }

  @Post()
  async save(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.service.save(createOrderDto);
  }
}
