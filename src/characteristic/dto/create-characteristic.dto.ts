import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCharacteristicDto {
  @IsNotEmpty({ message: 'the name of chatacteristic can t be empty' })
  @IsString({ message: 'the category name is string' })
  charactName: string;

  @IsNotEmpty({ message: 'the value can t be empty' })
  @IsString({ message: 'the value is string' })
  value: string;
}
