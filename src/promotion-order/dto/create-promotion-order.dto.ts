import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePromotionOrderDto {
  @IsNotEmpty({ message: 'is required' })
  @IsNumber({}, { message: 'is number' })
  quantity: number;
  @IsNotEmpty({ message: 'is required' })
  @IsNumber({}, { message: 'is number' })
  price: number;
  @IsNotEmpty({ message: 'is required' })
  @IsNumber({}, { message: 'is number' })
  order: number;
  @IsNotEmpty({ message: 'is required' })
  @IsNumber({}, { message: 'is number' })
  promotionArticle: number;
}
