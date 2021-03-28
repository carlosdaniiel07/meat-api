import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateMenuDto {
  @IsNotEmpty()
  name: string
  
  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  imagePath: string

  @IsNumber()
  @IsPositive()
  price: number
}