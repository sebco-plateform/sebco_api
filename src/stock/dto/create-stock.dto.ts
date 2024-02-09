import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty({ message: 'date is required' })
  @IsString({ message: 'date is a string' })
  date: string;
}
