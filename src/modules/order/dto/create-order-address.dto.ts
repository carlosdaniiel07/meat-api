import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateOrderAddressDto {
  @IsNotEmpty()
  @MaxLength(100)
  street: string;

  @IsNotEmpty()
  @MaxLength(10)
  number: string;

  @IsOptional()
  @MaxLength(255)
  complement: string;
}
