import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStockArticleDto {
  @IsNotEmpty({ message: 'stockPrice is required' })
  @IsNumber({}, { message: 'stockPrice is number' })
  stockPrice: number;

  @IsNotEmpty({ message: 'quantity is required' })
  @IsNumber({}, { message: 'quantity is number' })
  quantity: number;

  @IsNotEmpty({ message: 'article_id is required' })
  @IsNumber({}, { message: 'article_id is number' })
  article_id: number;

  @IsNotEmpty({ message: 'stock_id is required' })
  @IsNumber({}, { message: 'stock_id is number' })
  stock_id: number;

  @IsNotEmpty({ message: 'provider_id is required' })
  @IsNumber({}, { message: 'provider_id is number' })
  provider_id: number;
}
