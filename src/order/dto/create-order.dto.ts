import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'totalPrice is not enpty' })
  @IsNumber({}, { message: 'totalPrice is Number' })
  totalPrice: number;

  @IsNotEmpty({ message: ' user_id is not enpty' })
  @IsNumber({}, { message: ' user_id is Number' })
  user_id: number;

  @IsNotEmpty({ message: ' delivery_id is not enpty' })
  @IsNumber({}, { message: ' delivery_id is Number' })
  delivery_id: number;
}
