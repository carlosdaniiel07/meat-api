import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateRestaurantDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  deliveryDelay: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  imagePath: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  openingHours: string;
}
