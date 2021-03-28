import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class CreateReviewDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  description: string

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number
}