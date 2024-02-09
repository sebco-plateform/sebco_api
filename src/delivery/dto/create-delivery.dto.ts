import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export interface OrderStatus {
  PASS: 'pass';
  DONE: 'done';
  CANCEL: 'cancel';
}
export class CreateDeliveryDto {
  @IsNotEmpty({ message: ' the city is not empty' })
  @IsString({ message: ' the city is string' })
  city: string;

  @IsNotEmpty({ message: ' the quarter is not empty' })
  @IsString({ message: ' the quarter is string' })
  quarter: string;

  @IsNotEmpty({ message: ' delivery date is not empty' })
  @IsString({ message: ' delivery date is string' })
  deliveryDate: string;

  @IsOptional()
  @IsString({ message: 'delivery hours is string' })
  deliveryHoures: string;

  @IsOptional()
  @IsString({ message: 'code promo is string' })
  codePromo: string;

  @IsNotEmpty({ message: 'the name of the indique is not empty' })
  @IsString({ message: 'the name of the indique is string' })
  indiqueName: string;

  @IsNotEmpty({ message: ' indiqueNumber is not empty' })
  @IsNumber({}, { message: ' indiqueNumber is number' })
  indiqueNumber: number;

  @IsOptional({ message: 'is not empty' })
  @IsString({ message: 'longitude is string' })
  longitude: string;

  @IsOptional({ message: 'is not empty' })
  @IsString({ message: ' latitude is string' })
  latitude: string;

  @IsNotEmpty({ message: 'the status is not empty' })
  @IsString({ message: 'the status is string' })
  status: OrderStatus;

  @IsNotEmpty({ message: 'the description is not empty' })
  @IsString({ message: 'the description is string' })
  description: string;

  @IsNotEmpty({ message: 'user id is not empty' })
  @IsNumber({}, { message: 'user id is number' })
  user_id: number;
}
