import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderArticleDto {
  @IsNotEmpty({ message: ' quantity is requiere' })
  @IsNumber({}, { message: ' quantity is number' })
  quantity: number;

  @IsNotEmpty({ message: 'price is requiere' })
  @IsNumber({}, { message: 'price is number' })
  price: number;

  @IsNotEmpty({ message: 'article_id is requiere' })
  @IsNumber({}, { message: 'article_id is number' })
  article_id: number;

  @IsNotEmpty({ message: 'order_id is requiere' })
  @IsNumber({}, { message: 'order_id is number' })
  order_id: number;
}
