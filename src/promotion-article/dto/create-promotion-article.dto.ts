import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePromotionArticleDto {
  @IsNotEmpty({ message: 'price is required' })
  @IsNumber({}, { message: 'price is number' })
  price: number;

  @IsNotEmpty({ message: 'the description is required' })
  @IsString({ message: 'the description is string' })
  description: string;
}
