import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsEnum, ValidateNested } from 'class-validator';
import { PaymentMethod } from '../payment-method.enum';
import { CreateOrderAddressDto } from './create-order-address.dto';
import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @Type(() => CreateOrderAddressDto)
  deliveryAddress: CreateOrderAddressDto;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod
}
