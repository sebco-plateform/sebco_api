import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum StatusEnum {
  PASS = 'passer',
  GOING = 'encours',
  DELIVERED = 'deliver',
  WAINTING = 'enattente',
}
export class CreateOrderDto {
  @IsNotEmpty({ message: 'totalPrice is not enpty' })
  @IsNumber({}, { message: 'totalPrice is Number' })
  totalPrice: number;

  @IsNotEmpty({ message: 'the status is not empty' })
  @IsString({ message: 'the status is string' })
  status: StatusEnum;

  @IsNotEmpty({ message: ' user_id is not enpty' })
  @IsNumber({}, { message: ' user_id is Number' })
  user_id: number;

  @IsNotEmpty({ message: ' delivery_id is not enpty' })
  @IsNumber({}, { message: ' delivery_id is Number' })
  delivery_id: number;
}
