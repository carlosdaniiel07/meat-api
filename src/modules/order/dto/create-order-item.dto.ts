import { IsNumber, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  product: string;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
