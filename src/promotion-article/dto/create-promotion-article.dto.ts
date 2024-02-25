import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePromotionArticleDto {
  @IsNotEmpty({ message: 'price is required' })
  @IsNumber({}, { message: 'price is number' })
  price: number;

  @IsNotEmpty({ message: 'the description is required' })
  @IsString({ message: 'the description is string' })
  description: string;

  @IsNumber({}, { message: 'article id is number' })
  @IsOptional()
  article_id: number;

  @IsNumber({}, { message: 'promotion id is number' })
  @IsOptional()
  promotion_id: number;
}
